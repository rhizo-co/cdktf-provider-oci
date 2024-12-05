# `optimizerProfile` Submodule <a name="`optimizerProfile` Submodule" id="rhizo-co-terraform-provider-oci.optimizerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OptimizerProfile <a name="OptimizerProfile" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile oci_optimizer_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfile(
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
  description: str,
  levels_configuration: OptimizerProfileLevelsConfiguration,
  name: str,
  aggregation_interval_in_days: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  target_compartments: OptimizerProfileTargetCompartments = None,
  target_tags: OptimizerProfileTargetTags = None,
  timeouts: OptimizerProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#compartment_id OptimizerProfile#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#description OptimizerProfile#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.levelsConfiguration">levels_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration">OptimizerProfileLevelsConfiguration</a></code> | levels_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#name OptimizerProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.aggregationIntervalInDays">aggregation_interval_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#aggregation_interval_in_days OptimizerProfile#aggregation_interval_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#defined_tags OptimizerProfile#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#freeform_tags OptimizerProfile#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#id OptimizerProfile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.targetCompartments">target_compartments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments">OptimizerProfileTargetCompartments</a></code> | target_compartments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.targetTags">target_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags">OptimizerProfileTargetTags</a></code> | target_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts">OptimizerProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#compartment_id OptimizerProfile#compartment_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#description OptimizerProfile#description}.

---

##### `levels_configuration`<sup>Required</sup> <a name="levels_configuration" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.levelsConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration">OptimizerProfileLevelsConfiguration</a>

levels_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#levels_configuration OptimizerProfile#levels_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#name OptimizerProfile#name}.

---

##### `aggregation_interval_in_days`<sup>Optional</sup> <a name="aggregation_interval_in_days" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.aggregationIntervalInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#aggregation_interval_in_days OptimizerProfile#aggregation_interval_in_days}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#defined_tags OptimizerProfile#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#freeform_tags OptimizerProfile#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#id OptimizerProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_compartments`<sup>Optional</sup> <a name="target_compartments" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.targetCompartments"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments">OptimizerProfileTargetCompartments</a>

target_compartments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#target_compartments OptimizerProfile#target_compartments}

---

##### `target_tags`<sup>Optional</sup> <a name="target_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.targetTags"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags">OptimizerProfileTargetTags</a>

target_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#target_tags OptimizerProfile#target_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts">OptimizerProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#timeouts OptimizerProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putLevelsConfiguration">put_levels_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTargetCompartments">put_target_compartments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTargetTags">put_target_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetAggregationIntervalInDays">reset_aggregation_interval_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetTargetCompartments">reset_target_compartments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetTargetTags">reset_target_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_levels_configuration` <a name="put_levels_configuration" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putLevelsConfiguration"></a>

```python
def put_levels_configuration(
  items: typing.Union[IResolvable, typing.List[OptimizerProfileLevelsConfigurationItems]] = None
) -> None
```

###### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putLevelsConfiguration.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#items OptimizerProfile#items}

---

##### `put_target_compartments` <a name="put_target_compartments" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTargetCompartments"></a>

```python
def put_target_compartments(
  items: typing.List[str]
) -> None
```

###### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTargetCompartments.parameter.items"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#items OptimizerProfile#items}.

---

##### `put_target_tags` <a name="put_target_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTargetTags"></a>

```python
def put_target_tags(
  items: typing.Union[IResolvable, typing.List[OptimizerProfileTargetTagsItems]]
) -> None
```

###### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTargetTags.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#items OptimizerProfile#items}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#create OptimizerProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#delete OptimizerProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#update OptimizerProfile#update}.

---

##### `reset_aggregation_interval_in_days` <a name="reset_aggregation_interval_in_days" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetAggregationIntervalInDays"></a>

```python
def reset_aggregation_interval_in_days() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_target_compartments` <a name="reset_target_compartments" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetTargetCompartments"></a>

```python
def reset_target_compartments() -> None
```

##### `reset_target_tags` <a name="reset_target_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetTargetTags"></a>

```python
def reset_target_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OptimizerProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OptimizerProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OptimizerProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OptimizerProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OptimizerProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.levelsConfiguration">levels_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference">OptimizerProfileLevelsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.targetCompartments">target_compartments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference">OptimizerProfileTargetCompartmentsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.targetTags">target_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference">OptimizerProfileTargetTagsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference">OptimizerProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.aggregationIntervalInDaysInput">aggregation_interval_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.levelsConfigurationInput">levels_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration">OptimizerProfileLevelsConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.targetCompartmentsInput">target_compartments_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments">OptimizerProfileTargetCompartments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.targetTagsInput">target_tags_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags">OptimizerProfileTargetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts">OptimizerProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.aggregationIntervalInDays">aggregation_interval_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `levels_configuration`<sup>Required</sup> <a name="levels_configuration" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.levelsConfiguration"></a>

```python
levels_configuration: OptimizerProfileLevelsConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference">OptimizerProfileLevelsConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_compartments`<sup>Required</sup> <a name="target_compartments" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.targetCompartments"></a>

```python
target_compartments: OptimizerProfileTargetCompartmentsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference">OptimizerProfileTargetCompartmentsOutputReference</a>

---

##### `target_tags`<sup>Required</sup> <a name="target_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.targetTags"></a>

```python
target_tags: OptimizerProfileTargetTagsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference">OptimizerProfileTargetTagsOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.timeouts"></a>

```python
timeouts: OptimizerProfileTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference">OptimizerProfileTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `aggregation_interval_in_days_input`<sup>Optional</sup> <a name="aggregation_interval_in_days_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.aggregationIntervalInDaysInput"></a>

```python
aggregation_interval_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `levels_configuration_input`<sup>Optional</sup> <a name="levels_configuration_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.levelsConfigurationInput"></a>

```python
levels_configuration_input: OptimizerProfileLevelsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration">OptimizerProfileLevelsConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_compartments_input`<sup>Optional</sup> <a name="target_compartments_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.targetCompartmentsInput"></a>

```python
target_compartments_input: OptimizerProfileTargetCompartments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments">OptimizerProfileTargetCompartments</a>

---

##### `target_tags_input`<sup>Optional</sup> <a name="target_tags_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.targetTagsInput"></a>

```python
target_tags_input: OptimizerProfileTargetTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags">OptimizerProfileTargetTags</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OptimizerProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts">OptimizerProfileTimeouts</a>]

---

##### `aggregation_interval_in_days`<sup>Required</sup> <a name="aggregation_interval_in_days" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.aggregationIntervalInDays"></a>

```python
aggregation_interval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OptimizerProfileConfig <a name="OptimizerProfileConfig" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  description: str,
  levels_configuration: OptimizerProfileLevelsConfiguration,
  name: str,
  aggregation_interval_in_days: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  target_compartments: OptimizerProfileTargetCompartments = None,
  target_tags: OptimizerProfileTargetTags = None,
  timeouts: OptimizerProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#compartment_id OptimizerProfile#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#description OptimizerProfile#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.levelsConfiguration">levels_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration">OptimizerProfileLevelsConfiguration</a></code> | levels_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#name OptimizerProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.aggregationIntervalInDays">aggregation_interval_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#aggregation_interval_in_days OptimizerProfile#aggregation_interval_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#defined_tags OptimizerProfile#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#freeform_tags OptimizerProfile#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#id OptimizerProfile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.targetCompartments">target_compartments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments">OptimizerProfileTargetCompartments</a></code> | target_compartments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.targetTags">target_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags">OptimizerProfileTargetTags</a></code> | target_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts">OptimizerProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#compartment_id OptimizerProfile#compartment_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#description OptimizerProfile#description}.

---

##### `levels_configuration`<sup>Required</sup> <a name="levels_configuration" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.levelsConfiguration"></a>

```python
levels_configuration: OptimizerProfileLevelsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration">OptimizerProfileLevelsConfiguration</a>

levels_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#levels_configuration OptimizerProfile#levels_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#name OptimizerProfile#name}.

---

##### `aggregation_interval_in_days`<sup>Optional</sup> <a name="aggregation_interval_in_days" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.aggregationIntervalInDays"></a>

```python
aggregation_interval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#aggregation_interval_in_days OptimizerProfile#aggregation_interval_in_days}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#defined_tags OptimizerProfile#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#freeform_tags OptimizerProfile#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#id OptimizerProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_compartments`<sup>Optional</sup> <a name="target_compartments" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.targetCompartments"></a>

```python
target_compartments: OptimizerProfileTargetCompartments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments">OptimizerProfileTargetCompartments</a>

target_compartments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#target_compartments OptimizerProfile#target_compartments}

---

##### `target_tags`<sup>Optional</sup> <a name="target_tags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.targetTags"></a>

```python
target_tags: OptimizerProfileTargetTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags">OptimizerProfileTargetTags</a>

target_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#target_tags OptimizerProfile#target_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileConfig.property.timeouts"></a>

```python
timeouts: OptimizerProfileTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts">OptimizerProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#timeouts OptimizerProfile#timeouts}

---

### OptimizerProfileLevelsConfiguration <a name="OptimizerProfileLevelsConfiguration" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileLevelsConfiguration(
  items: typing.Union[IResolvable, typing.List[OptimizerProfileLevelsConfigurationItems]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]]</code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[OptimizerProfileLevelsConfigurationItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#items OptimizerProfile#items}

---

### OptimizerProfileLevelsConfigurationItems <a name="OptimizerProfileLevelsConfigurationItems" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileLevelsConfigurationItems(
  level: str = None,
  recommendation_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#level OptimizerProfile#level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems.property.recommendationId">recommendation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#recommendation_id OptimizerProfile#recommendation_id}. |

---

##### `level`<sup>Optional</sup> <a name="level" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#level OptimizerProfile#level}.

---

##### `recommendation_id`<sup>Optional</sup> <a name="recommendation_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems.property.recommendationId"></a>

```python
recommendation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#recommendation_id OptimizerProfile#recommendation_id}.

---

### OptimizerProfileTargetCompartments <a name="OptimizerProfileTargetCompartments" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileTargetCompartments(
  items: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments.property.items">items</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#items OptimizerProfile#items}. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#items OptimizerProfile#items}.

---

### OptimizerProfileTargetTags <a name="OptimizerProfileTargetTags" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileTargetTags(
  items: typing.Union[IResolvable, typing.List[OptimizerProfileTargetTagsItems]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[OptimizerProfileTargetTagsItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#items OptimizerProfile#items}

---

### OptimizerProfileTargetTagsItems <a name="OptimizerProfileTargetTagsItems" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileTargetTagsItems(
  tag_definition_name: str,
  tag_namespace_name: str,
  tag_value_type: str,
  tag_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems.property.tagDefinitionName">tag_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#tag_definition_name OptimizerProfile#tag_definition_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems.property.tagNamespaceName">tag_namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#tag_namespace_name OptimizerProfile#tag_namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems.property.tagValueType">tag_value_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#tag_value_type OptimizerProfile#tag_value_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#tag_values OptimizerProfile#tag_values}. |

---

##### `tag_definition_name`<sup>Required</sup> <a name="tag_definition_name" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems.property.tagDefinitionName"></a>

```python
tag_definition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#tag_definition_name OptimizerProfile#tag_definition_name}.

---

##### `tag_namespace_name`<sup>Required</sup> <a name="tag_namespace_name" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems.property.tagNamespaceName"></a>

```python
tag_namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#tag_namespace_name OptimizerProfile#tag_namespace_name}.

---

##### `tag_value_type`<sup>Required</sup> <a name="tag_value_type" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems.property.tagValueType"></a>

```python
tag_value_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#tag_value_type OptimizerProfile#tag_value_type}.

---

##### `tag_values`<sup>Optional</sup> <a name="tag_values" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#tag_values OptimizerProfile#tag_values}.

---

### OptimizerProfileTimeouts <a name="OptimizerProfileTimeouts" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#create OptimizerProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#delete OptimizerProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#update OptimizerProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#create OptimizerProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#delete OptimizerProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_profile#update OptimizerProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OptimizerProfileLevelsConfigurationItemsList <a name="OptimizerProfileLevelsConfigurationItemsList" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileLevelsConfigurationItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OptimizerProfileLevelsConfigurationItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OptimizerProfileLevelsConfigurationItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]]

---


### OptimizerProfileLevelsConfigurationItemsOutputReference <a name="OptimizerProfileLevelsConfigurationItemsOutputReference" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.resetRecommendationId">reset_recommendation_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_level` <a name="reset_level" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_recommendation_id` <a name="reset_recommendation_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.resetRecommendationId"></a>

```python
def reset_recommendation_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.recommendationIdInput">recommendation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.recommendationId">recommendation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `recommendation_id_input`<sup>Optional</sup> <a name="recommendation_id_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.recommendationIdInput"></a>

```python
recommendation_id_input: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `recommendation_id`<sup>Required</sup> <a name="recommendation_id" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.recommendationId"></a>

```python
recommendation_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OptimizerProfileLevelsConfigurationItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]

---


### OptimizerProfileLevelsConfigurationOutputReference <a name="OptimizerProfileLevelsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.putItems">put_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.resetItems">reset_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[OptimizerProfileLevelsConfigurationItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]]

---

##### `reset_items` <a name="reset_items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.resetItems"></a>

```python
def reset_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList">OptimizerProfileLevelsConfigurationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration">OptimizerProfileLevelsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.items"></a>

```python
items: OptimizerProfileLevelsConfigurationItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItemsList">OptimizerProfileLevelsConfigurationItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[OptimizerProfileLevelsConfigurationItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationItems">OptimizerProfileLevelsConfigurationItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: OptimizerProfileLevelsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileLevelsConfiguration">OptimizerProfileLevelsConfiguration</a>

---


### OptimizerProfileTargetCompartmentsOutputReference <a name="OptimizerProfileTargetCompartmentsOutputReference" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.itemsInput">items_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments">OptimizerProfileTargetCompartments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.itemsInput"></a>

```python
items_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartmentsOutputReference.property.internalValue"></a>

```python
internal_value: OptimizerProfileTargetCompartments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetCompartments">OptimizerProfileTargetCompartments</a>

---


### OptimizerProfileTargetTagsItemsList <a name="OptimizerProfileTargetTagsItemsList" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileTargetTagsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OptimizerProfileTargetTagsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OptimizerProfileTargetTagsItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]]

---


### OptimizerProfileTargetTagsItemsOutputReference <a name="OptimizerProfileTargetTagsItemsOutputReference" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.resetTagValues">reset_tag_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag_values` <a name="reset_tag_values" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.resetTagValues"></a>

```python
def reset_tag_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagDefinitionNameInput">tag_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagNamespaceNameInput">tag_namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagValuesInput">tag_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagValueTypeInput">tag_value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagDefinitionName">tag_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagNamespaceName">tag_namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagValueType">tag_value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_definition_name_input`<sup>Optional</sup> <a name="tag_definition_name_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagDefinitionNameInput"></a>

```python
tag_definition_name_input: str
```

- *Type:* str

---

##### `tag_namespace_name_input`<sup>Optional</sup> <a name="tag_namespace_name_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagNamespaceNameInput"></a>

```python
tag_namespace_name_input: str
```

- *Type:* str

---

##### `tag_values_input`<sup>Optional</sup> <a name="tag_values_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagValuesInput"></a>

```python
tag_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_value_type_input`<sup>Optional</sup> <a name="tag_value_type_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagValueTypeInput"></a>

```python
tag_value_type_input: str
```

- *Type:* str

---

##### `tag_definition_name`<sup>Required</sup> <a name="tag_definition_name" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagDefinitionName"></a>

```python
tag_definition_name: str
```

- *Type:* str

---

##### `tag_namespace_name`<sup>Required</sup> <a name="tag_namespace_name" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagNamespaceName"></a>

```python
tag_namespace_name: str
```

- *Type:* str

---

##### `tag_values`<sup>Required</sup> <a name="tag_values" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_value_type`<sup>Required</sup> <a name="tag_value_type" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.tagValueType"></a>

```python
tag_value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OptimizerProfileTargetTagsItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]

---


### OptimizerProfileTargetTagsOutputReference <a name="OptimizerProfileTargetTagsOutputReference" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileTargetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.putItems">put_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[OptimizerProfileTargetTagsItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList">OptimizerProfileTargetTagsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags">OptimizerProfileTargetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.items"></a>

```python
items: OptimizerProfileTargetTagsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItemsList">OptimizerProfileTargetTagsItemsList</a>

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[OptimizerProfileTargetTagsItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsItems">OptimizerProfileTargetTagsItems</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTagsOutputReference.property.internalValue"></a>

```python
internal_value: OptimizerProfileTargetTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTargetTags">OptimizerProfileTargetTags</a>

---


### OptimizerProfileTimeoutsOutputReference <a name="OptimizerProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_profile

optimizerProfile.OptimizerProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts">OptimizerProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OptimizerProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerProfile.OptimizerProfileTimeouts">OptimizerProfileTimeouts</a>]

---



