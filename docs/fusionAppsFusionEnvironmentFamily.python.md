# `fusionAppsFusionEnvironmentFamily` Submodule <a name="`fusionAppsFusionEnvironmentFamily` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentFamily <a name="FusionAppsFusionEnvironmentFamily" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family oci_fusion_apps_fusion_environment_family}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  subscription_ids: typing.List[str],
  defined_tags: typing.Mapping[str] = None,
  family_maintenance_policy: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: FusionAppsFusionEnvironmentFamilyTimeouts = None,
  time_updated: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.subscriptionIds">subscription_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.familyMaintenancePolicy">family_maintenance_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | family_maintenance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.timeUpdated">time_updated</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}.

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.subscriptionIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}.

---

##### `family_maintenance_policy`<sup>Optional</sup> <a name="family_maintenance_policy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.familyMaintenancePolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

family_maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#family_maintenance_policy FusionAppsFusionEnvironmentFamily#family_maintenance_policy}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#timeouts FusionAppsFusionEnvironmentFamily#timeouts}

---

##### `time_updated`<sup>Optional</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.timeUpdated"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy">put_family_maintenance_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFamilyMaintenancePolicy">reset_family_maintenance_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeUpdated">reset_time_updated</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_family_maintenance_policy` <a name="put_family_maintenance_policy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy"></a>

```python
def put_family_maintenance_policy(
  concurrent_maintenance: str = None,
  is_monthly_patching_enabled: typing.Union[bool, IResolvable] = None,
  quarterly_upgrade_begin_times: str = None
) -> None
```

###### `concurrent_maintenance`<sup>Optional</sup> <a name="concurrent_maintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy.parameter.concurrentMaintenance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#concurrent_maintenance FusionAppsFusionEnvironmentFamily#concurrent_maintenance}.

---

###### `is_monthly_patching_enabled`<sup>Optional</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy.parameter.isMonthlyPatchingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#is_monthly_patching_enabled FusionAppsFusionEnvironmentFamily#is_monthly_patching_enabled}.

---

###### `quarterly_upgrade_begin_times`<sup>Optional</sup> <a name="quarterly_upgrade_begin_times" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy.parameter.quarterlyUpgradeBeginTimes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#quarterly_upgrade_begin_times FusionAppsFusionEnvironmentFamily#quarterly_upgrade_begin_times}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#create FusionAppsFusionEnvironmentFamily#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#delete FusionAppsFusionEnvironmentFamily#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#update FusionAppsFusionEnvironmentFamily#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_family_maintenance_policy` <a name="reset_family_maintenance_policy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFamilyMaintenancePolicy"></a>

```python
def reset_family_maintenance_policy() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_updated` <a name="reset_time_updated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeUpdated"></a>

```python
def reset_time_updated() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentFamily resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentFamily resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FusionAppsFusionEnvironmentFamily to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FusionAppsFusionEnvironmentFamily that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentFamily to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicy">family_maintenance_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.isSubscriptionUpdateNeeded">is_subscription_update_needed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.systemName">system_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference">FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicyInput">family_maintenance_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIdsInput">subscription_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdatedInput">time_updated_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIds">subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `family_maintenance_policy`<sup>Required</sup> <a name="family_maintenance_policy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicy"></a>

```python
family_maintenance_policy: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference</a>

---

##### `is_subscription_update_needed`<sup>Required</sup> <a name="is_subscription_update_needed" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.isSubscriptionUpdateNeeded"></a>

```python
is_subscription_update_needed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_name`<sup>Required</sup> <a name="system_name" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.systemName"></a>

```python
system_name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeouts"></a>

```python
timeouts: FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference">FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `family_maintenance_policy_input`<sup>Optional</sup> <a name="family_maintenance_policy_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicyInput"></a>

```python
family_maintenance_policy_input: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscription_ids_input`<sup>Optional</sup> <a name="subscription_ids_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIdsInput"></a>

```python
subscription_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FusionAppsFusionEnvironmentFamilyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>]

---

##### `time_updated_input`<sup>Optional</sup> <a name="time_updated_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdatedInput"></a>

```python
time_updated_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIds"></a>

```python
subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentFamilyConfig <a name="FusionAppsFusionEnvironmentFamilyConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  subscription_ids: typing.List[str],
  defined_tags: typing.Mapping[str] = None,
  family_maintenance_policy: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: FusionAppsFusionEnvironmentFamilyTimeouts = None,
  time_updated: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.subscriptionIds">subscription_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.familyMaintenancePolicy">family_maintenance_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | family_maintenance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeUpdated">time_updated</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}.

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.subscriptionIds"></a>

```python
subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}.

---

##### `family_maintenance_policy`<sup>Optional</sup> <a name="family_maintenance_policy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.familyMaintenancePolicy"></a>

```python
family_maintenance_policy: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

family_maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#family_maintenance_policy FusionAppsFusionEnvironmentFamily#family_maintenance_policy}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeouts"></a>

```python
timeouts: FusionAppsFusionEnvironmentFamilyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#timeouts FusionAppsFusionEnvironmentFamily#timeouts}

---

##### `time_updated`<sup>Optional</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}.

---

### FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy <a name="FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy(
  concurrent_maintenance: str = None,
  is_monthly_patching_enabled: typing.Union[bool, IResolvable] = None,
  quarterly_upgrade_begin_times: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.concurrentMaintenance">concurrent_maintenance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#concurrent_maintenance FusionAppsFusionEnvironmentFamily#concurrent_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#is_monthly_patching_enabled FusionAppsFusionEnvironmentFamily#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.quarterlyUpgradeBeginTimes">quarterly_upgrade_begin_times</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#quarterly_upgrade_begin_times FusionAppsFusionEnvironmentFamily#quarterly_upgrade_begin_times}. |

---

##### `concurrent_maintenance`<sup>Optional</sup> <a name="concurrent_maintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.concurrentMaintenance"></a>

```python
concurrent_maintenance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#concurrent_maintenance FusionAppsFusionEnvironmentFamily#concurrent_maintenance}.

---

##### `is_monthly_patching_enabled`<sup>Optional</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#is_monthly_patching_enabled FusionAppsFusionEnvironmentFamily#is_monthly_patching_enabled}.

---

##### `quarterly_upgrade_begin_times`<sup>Optional</sup> <a name="quarterly_upgrade_begin_times" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.quarterlyUpgradeBeginTimes"></a>

```python
quarterly_upgrade_begin_times: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#quarterly_upgrade_begin_times FusionAppsFusionEnvironmentFamily#quarterly_upgrade_begin_times}.

---

### FusionAppsFusionEnvironmentFamilyTimeouts <a name="FusionAppsFusionEnvironmentFamilyTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#create FusionAppsFusionEnvironmentFamily#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#delete FusionAppsFusionEnvironmentFamily#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#update FusionAppsFusionEnvironmentFamily#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#create FusionAppsFusionEnvironmentFamily#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#delete FusionAppsFusionEnvironmentFamily#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#update FusionAppsFusionEnvironmentFamily#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference <a name="FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetConcurrentMaintenance">reset_concurrent_maintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetIsMonthlyPatchingEnabled">reset_is_monthly_patching_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetQuarterlyUpgradeBeginTimes">reset_quarterly_upgrade_begin_times</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_concurrent_maintenance` <a name="reset_concurrent_maintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetConcurrentMaintenance"></a>

```python
def reset_concurrent_maintenance() -> None
```

##### `reset_is_monthly_patching_enabled` <a name="reset_is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetIsMonthlyPatchingEnabled"></a>

```python
def reset_is_monthly_patching_enabled() -> None
```

##### `reset_quarterly_upgrade_begin_times` <a name="reset_quarterly_upgrade_begin_times" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetQuarterlyUpgradeBeginTimes"></a>

```python
def reset_quarterly_upgrade_begin_times() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenanceInput">concurrent_maintenance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabledInput">is_monthly_patching_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimesInput">quarterly_upgrade_begin_times_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance">concurrent_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">quarterly_upgrade_begin_times</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrent_maintenance_input`<sup>Optional</sup> <a name="concurrent_maintenance_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenanceInput"></a>

```python
concurrent_maintenance_input: str
```

- *Type:* str

---

##### `is_monthly_patching_enabled_input`<sup>Optional</sup> <a name="is_monthly_patching_enabled_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```python
is_monthly_patching_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quarterly_upgrade_begin_times_input`<sup>Optional</sup> <a name="quarterly_upgrade_begin_times_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimesInput"></a>

```python
quarterly_upgrade_begin_times_input: str
```

- *Type:* str

---

##### `concurrent_maintenance`<sup>Required</sup> <a name="concurrent_maintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance"></a>

```python
concurrent_maintenance: str
```

- *Type:* str

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quarterly_upgrade_begin_times`<sup>Required</sup> <a name="quarterly_upgrade_begin_times" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```python
quarterly_upgrade_begin_times: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

---


### FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_family

fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FusionAppsFusionEnvironmentFamilyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>]

---



