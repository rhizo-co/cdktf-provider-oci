# `bdsAutoScalingConfiguration` Submodule <a name="`bdsAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsAutoScalingConfiguration <a name="BdsAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration oci_bds_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  cluster_admin_password: str,
  is_enabled: typing.Union[bool, IResolvable],
  node_type: str,
  display_name: str = None,
  id: str = None,
  policy: BdsAutoScalingConfigurationPolicy = None,
  policy_details: BdsAutoScalingConfigurationPolicyDetails = None,
  timeouts: BdsAutoScalingConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#bds_instance_id BdsAutoScalingConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#cluster_admin_password BdsAutoScalingConfiguration#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#is_enabled BdsAutoScalingConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#node_type BdsAutoScalingConfiguration#node_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#display_name BdsAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#id BdsAutoScalingConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a></code> | policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.policyDetails">policy_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a></code> | policy_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#bds_instance_id BdsAutoScalingConfiguration#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#cluster_admin_password BdsAutoScalingConfiguration#cluster_admin_password}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#is_enabled BdsAutoScalingConfiguration#is_enabled}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.nodeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#node_type BdsAutoScalingConfiguration#node_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#display_name BdsAutoScalingConfiguration#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#id BdsAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.policy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy BdsAutoScalingConfiguration#policy}

---

##### `policy_details`<sup>Optional</sup> <a name="policy_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.policyDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a>

policy_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_details BdsAutoScalingConfiguration#policy_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#timeouts BdsAutoScalingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails">put_policy_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetPolicyDetails">reset_policy_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy` <a name="put_policy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicy"></a>

```python
def put_policy(
  policy_type: str,
  rules: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyRules]]
) -> None
```

###### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicy.parameter.policyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}.

---

###### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicy.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#rules BdsAutoScalingConfiguration#rules}

---

##### `put_policy_details` <a name="put_policy_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails"></a>

```python
def put_policy_details(
  policy_type: str,
  scale_down_config: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig = None,
  scale_in_config: BdsAutoScalingConfigurationPolicyDetailsScaleInConfig = None,
  scale_out_config: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig = None,
  scale_up_config: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig = None,
  schedule_details: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetails]] = None,
  timezone: str = None
) -> None
```

###### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails.parameter.policyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}.

---

###### `scale_down_config`<sup>Optional</sup> <a name="scale_down_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails.parameter.scaleDownConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

scale_down_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_down_config BdsAutoScalingConfiguration#scale_down_config}

---

###### `scale_in_config`<sup>Optional</sup> <a name="scale_in_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails.parameter.scaleInConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

scale_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_in_config BdsAutoScalingConfiguration#scale_in_config}

---

###### `scale_out_config`<sup>Optional</sup> <a name="scale_out_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails.parameter.scaleOutConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

scale_out_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_out_config BdsAutoScalingConfiguration#scale_out_config}

---

###### `scale_up_config`<sup>Optional</sup> <a name="scale_up_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails.parameter.scaleUpConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

scale_up_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_up_config BdsAutoScalingConfiguration#scale_up_config}

---

###### `schedule_details`<sup>Optional</sup> <a name="schedule_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails.parameter.scheduleDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]]

schedule_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#schedule_details BdsAutoScalingConfiguration#schedule_details}

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#timezone BdsAutoScalingConfiguration#timezone}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#create BdsAutoScalingConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#delete BdsAutoScalingConfiguration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#update BdsAutoScalingConfiguration#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy` <a name="reset_policy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_policy_details` <a name="reset_policy_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetPolicyDetails"></a>

```python
def reset_policy_details() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BdsAutoScalingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BdsAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BdsAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference">BdsAutoScalingConfigurationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyDetails">policy_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference">BdsAutoScalingConfigurationPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference">BdsAutoScalingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.clusterAdminPasswordInput">cluster_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyDetailsInput">policy_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyInput">policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policy"></a>

```python
policy: BdsAutoScalingConfigurationPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference">BdsAutoScalingConfigurationPolicyOutputReference</a>

---

##### `policy_details`<sup>Required</sup> <a name="policy_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyDetails"></a>

```python
policy_details: BdsAutoScalingConfigurationPolicyDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference">BdsAutoScalingConfigurationPolicyDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeouts"></a>

```python
timeouts: BdsAutoScalingConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference">BdsAutoScalingConfigurationTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `cluster_admin_password_input`<sup>Optional</sup> <a name="cluster_admin_password_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.clusterAdminPasswordInput"></a>

```python
cluster_admin_password_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `policy_details_input`<sup>Optional</sup> <a name="policy_details_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyDetailsInput"></a>

```python
policy_details_input: BdsAutoScalingConfigurationPolicyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a>

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyInput"></a>

```python
policy_input: BdsAutoScalingConfigurationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BdsAutoScalingConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a>]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BdsAutoScalingConfigurationConfig <a name="BdsAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  cluster_admin_password: str,
  is_enabled: typing.Union[bool, IResolvable],
  node_type: str,
  display_name: str = None,
  id: str = None,
  policy: BdsAutoScalingConfigurationPolicy = None,
  policy_details: BdsAutoScalingConfigurationPolicyDetails = None,
  timeouts: BdsAutoScalingConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#bds_instance_id BdsAutoScalingConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#cluster_admin_password BdsAutoScalingConfiguration#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#is_enabled BdsAutoScalingConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#node_type BdsAutoScalingConfiguration#node_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#display_name BdsAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#id BdsAutoScalingConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a></code> | policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.policyDetails">policy_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a></code> | policy_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#bds_instance_id BdsAutoScalingConfiguration#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#cluster_admin_password BdsAutoScalingConfiguration#cluster_admin_password}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#is_enabled BdsAutoScalingConfiguration#is_enabled}.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#node_type BdsAutoScalingConfiguration#node_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#display_name BdsAutoScalingConfiguration#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#id BdsAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.policy"></a>

```python
policy: BdsAutoScalingConfigurationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy BdsAutoScalingConfiguration#policy}

---

##### `policy_details`<sup>Optional</sup> <a name="policy_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.policyDetails"></a>

```python
policy_details: BdsAutoScalingConfigurationPolicyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a>

policy_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_details BdsAutoScalingConfiguration#policy_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.timeouts"></a>

```python
timeouts: BdsAutoScalingConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#timeouts BdsAutoScalingConfiguration#timeouts}

---

### BdsAutoScalingConfigurationPolicy <a name="BdsAutoScalingConfigurationPolicy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy(
  policy_type: str,
  rules: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyRules]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]]</code> | rules block. |

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#rules BdsAutoScalingConfiguration#rules}

---

### BdsAutoScalingConfigurationPolicyDetails <a name="BdsAutoScalingConfigurationPolicyDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails(
  policy_type: str,
  scale_down_config: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig = None,
  scale_in_config: BdsAutoScalingConfigurationPolicyDetailsScaleInConfig = None,
  scale_out_config: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig = None,
  scale_up_config: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig = None,
  schedule_details: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetails]] = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleDownConfig">scale_down_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a></code> | scale_down_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleInConfig">scale_in_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a></code> | scale_in_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleOutConfig">scale_out_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a></code> | scale_out_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleUpConfig">scale_up_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a></code> | scale_up_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scheduleDetails">schedule_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]]</code> | schedule_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#timezone BdsAutoScalingConfiguration#timezone}. |

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}.

---

##### `scale_down_config`<sup>Optional</sup> <a name="scale_down_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleDownConfig"></a>

```python
scale_down_config: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

scale_down_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_down_config BdsAutoScalingConfiguration#scale_down_config}

---

##### `scale_in_config`<sup>Optional</sup> <a name="scale_in_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleInConfig"></a>

```python
scale_in_config: BdsAutoScalingConfigurationPolicyDetailsScaleInConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

scale_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_in_config BdsAutoScalingConfiguration#scale_in_config}

---

##### `scale_out_config`<sup>Optional</sup> <a name="scale_out_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleOutConfig"></a>

```python
scale_out_config: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

scale_out_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_out_config BdsAutoScalingConfiguration#scale_out_config}

---

##### `scale_up_config`<sup>Optional</sup> <a name="scale_up_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleUpConfig"></a>

```python
scale_up_config: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

scale_up_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_up_config BdsAutoScalingConfiguration#scale_up_config}

---

##### `schedule_details`<sup>Optional</sup> <a name="schedule_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scheduleDetails"></a>

```python
schedule_details: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]]

schedule_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#schedule_details BdsAutoScalingConfiguration#schedule_details}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#timezone BdsAutoScalingConfiguration#timezone}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig(
  memory_step_size: typing.Union[int, float] = None,
  metric: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric = None,
  min_memory_per_node: typing.Union[int, float] = None,
  min_ocpus_per_node: typing.Union[int, float] = None,
  ocpu_step_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.memoryStepSize">memory_step_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a></code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.minMemoryPerNode">min_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_memory_per_node BdsAutoScalingConfiguration#min_memory_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.minOcpusPerNode">min_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_ocpus_per_node BdsAutoScalingConfiguration#min_ocpus_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.ocpuStepSize">ocpu_step_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}. |

---

##### `memory_step_size`<sup>Optional</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.memoryStepSize"></a>

```python
memory_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

##### `min_memory_per_node`<sup>Optional</sup> <a name="min_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.minMemoryPerNode"></a>

```python
min_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_memory_per_node BdsAutoScalingConfiguration#min_memory_per_node}.

---

##### `min_ocpus_per_node`<sup>Optional</sup> <a name="min_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.minOcpusPerNode"></a>

```python
min_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_ocpus_per_node BdsAutoScalingConfiguration#min_ocpus_per_node}.

---

##### `ocpu_step_size`<sup>Optional</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.ocpuStepSize"></a>

```python
ocpu_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric(
  metric_type: str = None,
  threshold: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.property.metricType">metric_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a></code> | threshold block. |

---

##### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold(
  duration_in_minutes: typing.Union[int, float] = None,
  operator: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleInConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig(
  metric: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric = None,
  min_node_count: typing.Union[int, float] = None,
  step_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a></code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_node_count BdsAutoScalingConfiguration#min_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.stepSize">step_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_node_count BdsAutoScalingConfiguration#min_node_count}.

---

##### `step_size`<sup>Optional</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.stepSize"></a>

```python
step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric(
  metric_type: str = None,
  threshold: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.property.metricType">metric_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a></code> | threshold block. |

---

##### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold(
  duration_in_minutes: typing.Union[int, float] = None,
  operator: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig(
  max_node_count: typing.Union[int, float] = None,
  metric: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric = None,
  step_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_node_count BdsAutoScalingConfiguration#max_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a></code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.stepSize">step_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}. |

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_node_count BdsAutoScalingConfiguration#max_node_count}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

##### `step_size`<sup>Optional</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.stepSize"></a>

```python
step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric(
  metric_type: str = None,
  threshold: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.property.metricType">metric_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a></code> | threshold block. |

---

##### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold(
  duration_in_minutes: typing.Union[int, float] = None,
  operator: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig(
  max_memory_per_node: typing.Union[int, float] = None,
  max_ocpus_per_node: typing.Union[int, float] = None,
  memory_step_size: typing.Union[int, float] = None,
  metric: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric = None,
  ocpu_step_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.maxMemoryPerNode">max_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_memory_per_node BdsAutoScalingConfiguration#max_memory_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.maxOcpusPerNode">max_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_ocpus_per_node BdsAutoScalingConfiguration#max_ocpus_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.memoryStepSize">memory_step_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a></code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.ocpuStepSize">ocpu_step_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}. |

---

##### `max_memory_per_node`<sup>Optional</sup> <a name="max_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.maxMemoryPerNode"></a>

```python
max_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_memory_per_node BdsAutoScalingConfiguration#max_memory_per_node}.

---

##### `max_ocpus_per_node`<sup>Optional</sup> <a name="max_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.maxOcpusPerNode"></a>

```python
max_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_ocpus_per_node BdsAutoScalingConfiguration#max_ocpus_per_node}.

---

##### `memory_step_size`<sup>Optional</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.memoryStepSize"></a>

```python
memory_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}.

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

##### `ocpu_step_size`<sup>Optional</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.ocpuStepSize"></a>

```python
ocpu_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric(
  metric_type: str = None,
  threshold: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.property.metricType">metric_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a></code> | threshold block. |

---

##### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold(
  duration_in_minutes: typing.Union[int, float] = None,
  operator: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationPolicyDetailsScheduleDetails <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails(
  schedule_type: str = None,
  time_and_horizontal_scaling_config: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig]] = None,
  time_and_vertical_scaling_config: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.scheduleType">schedule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#schedule_type BdsAutoScalingConfiguration#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.timeAndHorizontalScalingConfig">time_and_horizontal_scaling_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>]]</code> | time_and_horizontal_scaling_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.timeAndVerticalScalingConfig">time_and_vertical_scaling_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>]]</code> | time_and_vertical_scaling_config block. |

---

##### `schedule_type`<sup>Optional</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#schedule_type BdsAutoScalingConfiguration#schedule_type}.

---

##### `time_and_horizontal_scaling_config`<sup>Optional</sup> <a name="time_and_horizontal_scaling_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.timeAndHorizontalScalingConfig"></a>

```python
time_and_horizontal_scaling_config: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>]]

time_and_horizontal_scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_and_horizontal_scaling_config BdsAutoScalingConfiguration#time_and_horizontal_scaling_config}

---

##### `time_and_vertical_scaling_config`<sup>Optional</sup> <a name="time_and_vertical_scaling_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.timeAndVerticalScalingConfig"></a>

```python
time_and_vertical_scaling_config: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>]]

time_and_vertical_scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_and_vertical_scaling_config BdsAutoScalingConfiguration#time_and_vertical_scaling_config}

---

### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig(
  target_node_count: typing.Union[int, float] = None,
  time_recurrence: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.property.targetNodeCount">target_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_node_count BdsAutoScalingConfiguration#target_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.property.timeRecurrence">time_recurrence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}. |

---

##### `target_node_count`<sup>Optional</sup> <a name="target_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.property.targetNodeCount"></a>

```python
target_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_node_count BdsAutoScalingConfiguration#target_node_count}.

---

##### `time_recurrence`<sup>Optional</sup> <a name="time_recurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.property.timeRecurrence"></a>

```python
time_recurrence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}.

---

### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig(
  target_memory_per_node: typing.Union[int, float] = None,
  target_ocpus_per_node: typing.Union[int, float] = None,
  target_shape: str = None,
  time_recurrence: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetMemoryPerNode">target_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_memory_per_node BdsAutoScalingConfiguration#target_memory_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetOcpusPerNode">target_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_ocpus_per_node BdsAutoScalingConfiguration#target_ocpus_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetShape">target_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_shape BdsAutoScalingConfiguration#target_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.timeRecurrence">time_recurrence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}. |

---

##### `target_memory_per_node`<sup>Optional</sup> <a name="target_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetMemoryPerNode"></a>

```python
target_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_memory_per_node BdsAutoScalingConfiguration#target_memory_per_node}.

---

##### `target_ocpus_per_node`<sup>Optional</sup> <a name="target_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetOcpusPerNode"></a>

```python
target_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_ocpus_per_node BdsAutoScalingConfiguration#target_ocpus_per_node}.

---

##### `target_shape`<sup>Optional</sup> <a name="target_shape" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetShape"></a>

```python
target_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_shape BdsAutoScalingConfiguration#target_shape}.

---

##### `time_recurrence`<sup>Optional</sup> <a name="time_recurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.timeRecurrence"></a>

```python
time_recurrence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}.

---

### BdsAutoScalingConfigurationPolicyRules <a name="BdsAutoScalingConfigurationPolicyRules" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules(
  action: str,
  metric: BdsAutoScalingConfigurationPolicyRulesMetric
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#action BdsAutoScalingConfiguration#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a></code> | metric block. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#action BdsAutoScalingConfiguration#action}.

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

### BdsAutoScalingConfigurationPolicyRulesMetric <a name="BdsAutoScalingConfigurationPolicyRulesMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric(
  metric_type: str,
  threshold: BdsAutoScalingConfigurationPolicyRulesMetricThreshold
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.property.metricType">metric_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a></code> | threshold block. |

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyRulesMetricThreshold <a name="BdsAutoScalingConfigurationPolicyRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold(
  duration_in_minutes: typing.Union[int, float],
  operator: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationTimeouts <a name="BdsAutoScalingConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#create BdsAutoScalingConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#delete BdsAutoScalingConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#update BdsAutoScalingConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#create BdsAutoScalingConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#delete BdsAutoScalingConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#update BdsAutoScalingConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsAutoScalingConfigurationPolicyDetailsOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig">put_scale_down_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleInConfig">put_scale_in_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleOutConfig">put_scale_out_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig">put_scale_up_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScheduleDetails">put_schedule_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleDownConfig">reset_scale_down_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleInConfig">reset_scale_in_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleOutConfig">reset_scale_out_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleUpConfig">reset_scale_up_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScheduleDetails">reset_schedule_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scale_down_config` <a name="put_scale_down_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig"></a>

```python
def put_scale_down_config(
  memory_step_size: typing.Union[int, float] = None,
  metric: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric = None,
  min_memory_per_node: typing.Union[int, float] = None,
  min_ocpus_per_node: typing.Union[int, float] = None,
  ocpu_step_size: typing.Union[int, float] = None
) -> None
```

###### `memory_step_size`<sup>Optional</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig.parameter.memoryStepSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}.

---

###### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig.parameter.metric"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

###### `min_memory_per_node`<sup>Optional</sup> <a name="min_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig.parameter.minMemoryPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_memory_per_node BdsAutoScalingConfiguration#min_memory_per_node}.

---

###### `min_ocpus_per_node`<sup>Optional</sup> <a name="min_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig.parameter.minOcpusPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_ocpus_per_node BdsAutoScalingConfiguration#min_ocpus_per_node}.

---

###### `ocpu_step_size`<sup>Optional</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig.parameter.ocpuStepSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}.

---

##### `put_scale_in_config` <a name="put_scale_in_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleInConfig"></a>

```python
def put_scale_in_config(
  metric: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric = None,
  min_node_count: typing.Union[int, float] = None,
  step_size: typing.Union[int, float] = None
) -> None
```

###### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleInConfig.parameter.metric"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

###### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleInConfig.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_node_count BdsAutoScalingConfiguration#min_node_count}.

---

###### `step_size`<sup>Optional</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleInConfig.parameter.stepSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}.

---

##### `put_scale_out_config` <a name="put_scale_out_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleOutConfig"></a>

```python
def put_scale_out_config(
  max_node_count: typing.Union[int, float] = None,
  metric: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric = None,
  step_size: typing.Union[int, float] = None
) -> None
```

###### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleOutConfig.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_node_count BdsAutoScalingConfiguration#max_node_count}.

---

###### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleOutConfig.parameter.metric"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

###### `step_size`<sup>Optional</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleOutConfig.parameter.stepSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}.

---

##### `put_scale_up_config` <a name="put_scale_up_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig"></a>

```python
def put_scale_up_config(
  max_memory_per_node: typing.Union[int, float] = None,
  max_ocpus_per_node: typing.Union[int, float] = None,
  memory_step_size: typing.Union[int, float] = None,
  metric: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric = None,
  ocpu_step_size: typing.Union[int, float] = None
) -> None
```

###### `max_memory_per_node`<sup>Optional</sup> <a name="max_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig.parameter.maxMemoryPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_memory_per_node BdsAutoScalingConfiguration#max_memory_per_node}.

---

###### `max_ocpus_per_node`<sup>Optional</sup> <a name="max_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig.parameter.maxOcpusPerNode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_ocpus_per_node BdsAutoScalingConfiguration#max_ocpus_per_node}.

---

###### `memory_step_size`<sup>Optional</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig.parameter.memoryStepSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}.

---

###### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig.parameter.metric"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

###### `ocpu_step_size`<sup>Optional</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig.parameter.ocpuStepSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}.

---

##### `put_schedule_details` <a name="put_schedule_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScheduleDetails"></a>

```python
def put_schedule_details(
  value: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScheduleDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]]

---

##### `reset_scale_down_config` <a name="reset_scale_down_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleDownConfig"></a>

```python
def reset_scale_down_config() -> None
```

##### `reset_scale_in_config` <a name="reset_scale_in_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleInConfig"></a>

```python
def reset_scale_in_config() -> None
```

##### `reset_scale_out_config` <a name="reset_scale_out_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleOutConfig"></a>

```python
def reset_scale_out_config() -> None
```

##### `reset_scale_up_config` <a name="reset_scale_up_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleUpConfig"></a>

```python
def reset_scale_up_config() -> None
```

##### `reset_schedule_details` <a name="reset_schedule_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScheduleDetails"></a>

```python
def reset_schedule_details() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig">scale_down_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig">scale_in_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig">scale_out_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig">scale_up_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails">schedule_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType">trigger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfigInput">scale_down_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfigInput">scale_in_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfigInput">scale_out_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfigInput">scale_up_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetailsInput">schedule_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `scale_down_config`<sup>Required</sup> <a name="scale_down_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig"></a>

```python
scale_down_config: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference</a>

---

##### `scale_in_config`<sup>Required</sup> <a name="scale_in_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig"></a>

```python
scale_in_config: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference</a>

---

##### `scale_out_config`<sup>Required</sup> <a name="scale_out_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig"></a>

```python
scale_out_config: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference</a>

---

##### `scale_up_config`<sup>Required</sup> <a name="scale_up_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig"></a>

```python
scale_up_config: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference</a>

---

##### `schedule_details`<sup>Required</sup> <a name="schedule_details" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails"></a>

```python
schedule_details: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a>

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `scale_down_config_input`<sup>Optional</sup> <a name="scale_down_config_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfigInput"></a>

```python
scale_down_config_input: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

---

##### `scale_in_config_input`<sup>Optional</sup> <a name="scale_in_config_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfigInput"></a>

```python
scale_in_config_input: BdsAutoScalingConfigurationPolicyDetailsScaleInConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

---

##### `scale_out_config_input`<sup>Optional</sup> <a name="scale_out_config_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfigInput"></a>

```python
scale_out_config_input: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

---

##### `scale_up_config_input`<sup>Optional</sup> <a name="scale_up_config_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfigInput"></a>

```python
scale_up_config_input: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

---

##### `schedule_details_input`<sup>Optional</sup> <a name="schedule_details_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetailsInput"></a>

```python
schedule_details_input: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.putThreshold">put_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resetMetricType">reset_metric_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_threshold` <a name="put_threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.putThreshold"></a>

```python
def put_threshold(
  duration_in_minutes: typing.Union[int, float] = None,
  operator: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.putThreshold.parameter.durationInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.putThreshold.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

##### `reset_metric_type` <a name="reset_metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resetMetricType"></a>

```python
def reset_metric_type() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricTypeInput">metric_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.thresholdInput">threshold_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference</a>

---

##### `metric_type_input`<sup>Optional</sup> <a name="metric_type_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricTypeInput"></a>

```python
metric_type_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.thresholdInput"></a>

```python
threshold_input: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetDurationInMinutes">reset_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_in_minutes` <a name="reset_duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetDurationInMinutes"></a>

```python
def reset_duration_in_minutes() -> None
```

##### `reset_operator` <a name="reset_operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutesInput">duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes_input`<sup>Optional</sup> <a name="duration_in_minutes_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```python
duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMemoryStepSize">reset_memory_step_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMinMemoryPerNode">reset_min_memory_per_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMinOcpusPerNode">reset_min_ocpus_per_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetOcpuStepSize">reset_ocpu_step_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.putMetric"></a>

```python
def put_metric(
  metric_type: str = None,
  threshold: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold = None
) -> None
```

###### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.putMetric.parameter.metricType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.putMetric.parameter.threshold"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

##### `reset_memory_step_size` <a name="reset_memory_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMemoryStepSize"></a>

```python
def reset_memory_step_size() -> None
```

##### `reset_metric` <a name="reset_metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_min_memory_per_node` <a name="reset_min_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMinMemoryPerNode"></a>

```python
def reset_min_memory_per_node() -> None
```

##### `reset_min_ocpus_per_node` <a name="reset_min_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMinOcpusPerNode"></a>

```python
def reset_min_ocpus_per_node() -> None
```

##### `reset_ocpu_step_size` <a name="reset_ocpu_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetOcpuStepSize"></a>

```python
def reset_ocpu_step_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSizeInput">memory_step_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metricInput">metric_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNodeInput">min_memory_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNodeInput">min_ocpus_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSizeInput">ocpu_step_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize">memory_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode">min_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode">min_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize">ocpu_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference</a>

---

##### `memory_step_size_input`<sup>Optional</sup> <a name="memory_step_size_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSizeInput"></a>

```python
memory_step_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metricInput"></a>

```python
metric_input: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

---

##### `min_memory_per_node_input`<sup>Optional</sup> <a name="min_memory_per_node_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNodeInput"></a>

```python
min_memory_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ocpus_per_node_input`<sup>Optional</sup> <a name="min_ocpus_per_node_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNodeInput"></a>

```python
min_ocpus_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_step_size_input`<sup>Optional</sup> <a name="ocpu_step_size_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSizeInput"></a>

```python
ocpu_step_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_step_size`<sup>Required</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize"></a>

```python
memory_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_per_node`<sup>Required</sup> <a name="min_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode"></a>

```python
min_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ocpus_per_node`<sup>Required</sup> <a name="min_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode"></a>

```python
min_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_step_size`<sup>Required</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize"></a>

```python
ocpu_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.putThreshold">put_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resetMetricType">reset_metric_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_threshold` <a name="put_threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.putThreshold"></a>

```python
def put_threshold(
  duration_in_minutes: typing.Union[int, float] = None,
  operator: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.putThreshold.parameter.durationInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.putThreshold.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

##### `reset_metric_type` <a name="reset_metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resetMetricType"></a>

```python
def reset_metric_type() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricTypeInput">metric_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.thresholdInput">threshold_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference</a>

---

##### `metric_type_input`<sup>Optional</sup> <a name="metric_type_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricTypeInput"></a>

```python
metric_type_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.thresholdInput"></a>

```python
threshold_input: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetDurationInMinutes">reset_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_in_minutes` <a name="reset_duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetDurationInMinutes"></a>

```python
def reset_duration_in_minutes() -> None
```

##### `reset_operator` <a name="reset_operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutesInput">duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes_input`<sup>Optional</sup> <a name="duration_in_minutes_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```python
duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetMinNodeCount">reset_min_node_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetStepSize">reset_step_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.putMetric"></a>

```python
def put_metric(
  metric_type: str = None,
  threshold: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold = None
) -> None
```

###### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.putMetric.parameter.metricType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.putMetric.parameter.threshold"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

##### `reset_metric` <a name="reset_metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_min_node_count` <a name="reset_min_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetMinNodeCount"></a>

```python
def reset_min_node_count() -> None
```

##### `reset_step_size` <a name="reset_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetStepSize"></a>

```python
def reset_step_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metricInput">metric_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSizeInput">step_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize">step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference</a>

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metricInput"></a>

```python
metric_input: BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_size_input`<sup>Optional</sup> <a name="step_size_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSizeInput"></a>

```python
step_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_size`<sup>Required</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize"></a>

```python
step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleInConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.putThreshold">put_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resetMetricType">reset_metric_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_threshold` <a name="put_threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.putThreshold"></a>

```python
def put_threshold(
  duration_in_minutes: typing.Union[int, float] = None,
  operator: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.putThreshold.parameter.durationInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.putThreshold.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

##### `reset_metric_type` <a name="reset_metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resetMetricType"></a>

```python
def reset_metric_type() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricTypeInput">metric_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.thresholdInput">threshold_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference</a>

---

##### `metric_type_input`<sup>Optional</sup> <a name="metric_type_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricTypeInput"></a>

```python
metric_type_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.thresholdInput"></a>

```python
threshold_input: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetDurationInMinutes">reset_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_in_minutes` <a name="reset_duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetDurationInMinutes"></a>

```python
def reset_duration_in_minutes() -> None
```

##### `reset_operator` <a name="reset_operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutesInput">duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes_input`<sup>Optional</sup> <a name="duration_in_minutes_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```python
duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetMaxNodeCount">reset_max_node_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetStepSize">reset_step_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.putMetric"></a>

```python
def put_metric(
  metric_type: str = None,
  threshold: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold = None
) -> None
```

###### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.putMetric.parameter.metricType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.putMetric.parameter.threshold"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

##### `reset_max_node_count` <a name="reset_max_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetMaxNodeCount"></a>

```python
def reset_max_node_count() -> None
```

##### `reset_metric` <a name="reset_metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_step_size` <a name="reset_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetStepSize"></a>

```python
def reset_step_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metricInput">metric_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSizeInput">step_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize">step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference</a>

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metricInput"></a>

```python
metric_input: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

---

##### `step_size_input`<sup>Optional</sup> <a name="step_size_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSizeInput"></a>

```python
step_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_size`<sup>Required</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize"></a>

```python
step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.putThreshold">put_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resetMetricType">reset_metric_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_threshold` <a name="put_threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.putThreshold"></a>

```python
def put_threshold(
  duration_in_minutes: typing.Union[int, float] = None,
  operator: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.putThreshold.parameter.durationInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.putThreshold.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

##### `reset_metric_type` <a name="reset_metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resetMetricType"></a>

```python
def reset_metric_type() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricTypeInput">metric_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.thresholdInput">threshold_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference</a>

---

##### `metric_type_input`<sup>Optional</sup> <a name="metric_type_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricTypeInput"></a>

```python
metric_type_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.thresholdInput"></a>

```python
threshold_input: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetDurationInMinutes">reset_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_in_minutes` <a name="reset_duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetDurationInMinutes"></a>

```python
def reset_duration_in_minutes() -> None
```

##### `reset_operator` <a name="reset_operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutesInput">duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes_input`<sup>Optional</sup> <a name="duration_in_minutes_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```python
duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMaxMemoryPerNode">reset_max_memory_per_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMaxOcpusPerNode">reset_max_ocpus_per_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMemoryStepSize">reset_memory_step_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetOcpuStepSize">reset_ocpu_step_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.putMetric"></a>

```python
def put_metric(
  metric_type: str = None,
  threshold: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold = None
) -> None
```

###### `metric_type`<sup>Optional</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.putMetric.parameter.metricType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.putMetric.parameter.threshold"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

##### `reset_max_memory_per_node` <a name="reset_max_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMaxMemoryPerNode"></a>

```python
def reset_max_memory_per_node() -> None
```

##### `reset_max_ocpus_per_node` <a name="reset_max_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMaxOcpusPerNode"></a>

```python
def reset_max_ocpus_per_node() -> None
```

##### `reset_memory_step_size` <a name="reset_memory_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMemoryStepSize"></a>

```python
def reset_memory_step_size() -> None
```

##### `reset_metric` <a name="reset_metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_ocpu_step_size` <a name="reset_ocpu_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetOcpuStepSize"></a>

```python
def reset_ocpu_step_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNodeInput">max_memory_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNodeInput">max_ocpus_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSizeInput">memory_step_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metricInput">metric_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSizeInput">ocpu_step_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode">max_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode">max_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize">memory_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize">ocpu_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference</a>

---

##### `max_memory_per_node_input`<sup>Optional</sup> <a name="max_memory_per_node_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNodeInput"></a>

```python
max_memory_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ocpus_per_node_input`<sup>Optional</sup> <a name="max_ocpus_per_node_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNodeInput"></a>

```python
max_ocpus_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_step_size_input`<sup>Optional</sup> <a name="memory_step_size_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSizeInput"></a>

```python
memory_step_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metricInput"></a>

```python
metric_input: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

---

##### `ocpu_step_size_input`<sup>Optional</sup> <a name="ocpu_step_size_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSizeInput"></a>

```python
ocpu_step_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_per_node`<sup>Required</sup> <a name="max_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode"></a>

```python
max_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ocpus_per_node`<sup>Required</sup> <a name="max_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode"></a>

```python
max_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_step_size`<sup>Required</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize"></a>

```python
memory_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_step_size`<sup>Required</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize"></a>

```python
ocpu_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]]

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndHorizontalScalingConfig">put_time_and_horizontal_scaling_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndVerticalScalingConfig">put_time_and_vertical_scaling_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetScheduleType">reset_schedule_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetTimeAndHorizontalScalingConfig">reset_time_and_horizontal_scaling_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetTimeAndVerticalScalingConfig">reset_time_and_vertical_scaling_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_time_and_horizontal_scaling_config` <a name="put_time_and_horizontal_scaling_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndHorizontalScalingConfig"></a>

```python
def put_time_and_horizontal_scaling_config(
  value: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndHorizontalScalingConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>]]

---

##### `put_time_and_vertical_scaling_config` <a name="put_time_and_vertical_scaling_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndVerticalScalingConfig"></a>

```python
def put_time_and_vertical_scaling_config(
  value: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndVerticalScalingConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>]]

---

##### `reset_schedule_type` <a name="reset_schedule_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetScheduleType"></a>

```python
def reset_schedule_type() -> None
```

##### `reset_time_and_horizontal_scaling_config` <a name="reset_time_and_horizontal_scaling_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetTimeAndHorizontalScalingConfig"></a>

```python
def reset_time_and_horizontal_scaling_config() -> None
```

##### `reset_time_and_vertical_scaling_config` <a name="reset_time_and_vertical_scaling_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetTimeAndVerticalScalingConfig"></a>

```python
def reset_time_and_vertical_scaling_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig">time_and_horizontal_scaling_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig">time_and_vertical_scaling_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleTypeInput">schedule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfigInput">time_and_horizontal_scaling_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfigInput">time_and_vertical_scaling_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType">schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_and_horizontal_scaling_config`<sup>Required</sup> <a name="time_and_horizontal_scaling_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig"></a>

```python
time_and_horizontal_scaling_config: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a>

---

##### `time_and_vertical_scaling_config`<sup>Required</sup> <a name="time_and_vertical_scaling_config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig"></a>

```python
time_and_vertical_scaling_config: BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a>

---

##### `schedule_type_input`<sup>Optional</sup> <a name="schedule_type_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleTypeInput"></a>

```python
schedule_type_input: str
```

- *Type:* str

---

##### `time_and_horizontal_scaling_config_input`<sup>Optional</sup> <a name="time_and_horizontal_scaling_config_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfigInput"></a>

```python
time_and_horizontal_scaling_config_input: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>]]

---

##### `time_and_vertical_scaling_config_input`<sup>Optional</sup> <a name="time_and_vertical_scaling_config_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfigInput"></a>

```python
time_and_vertical_scaling_config_input: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>]]

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsAutoScalingConfigurationPolicyDetailsScheduleDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails">BdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>]

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>]]

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resetTargetNodeCount">reset_target_node_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resetTimeRecurrence">reset_time_recurrence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_node_count` <a name="reset_target_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resetTargetNodeCount"></a>

```python
def reset_target_node_count() -> None
```

##### `reset_time_recurrence` <a name="reset_time_recurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resetTimeRecurrence"></a>

```python
def reset_time_recurrence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCountInput">target_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrenceInput">time_recurrence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount">target_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence">time_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_node_count_input`<sup>Optional</sup> <a name="target_node_count_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCountInput"></a>

```python
target_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_recurrence_input`<sup>Optional</sup> <a name="time_recurrence_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrenceInput"></a>

```python
time_recurrence_input: str
```

- *Type:* str

---

##### `target_node_count`<sup>Required</sup> <a name="target_node_count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount"></a>

```python
target_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_recurrence`<sup>Required</sup> <a name="time_recurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence"></a>

```python
time_recurrence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>]

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>]]

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetMemoryPerNode">reset_target_memory_per_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetOcpusPerNode">reset_target_ocpus_per_node</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetShape">reset_target_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTimeRecurrence">reset_time_recurrence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_memory_per_node` <a name="reset_target_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetMemoryPerNode"></a>

```python
def reset_target_memory_per_node() -> None
```

##### `reset_target_ocpus_per_node` <a name="reset_target_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetOcpusPerNode"></a>

```python
def reset_target_ocpus_per_node() -> None
```

##### `reset_target_shape` <a name="reset_target_shape" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetShape"></a>

```python
def reset_target_shape() -> None
```

##### `reset_time_recurrence` <a name="reset_time_recurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTimeRecurrence"></a>

```python
def reset_time_recurrence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNodeInput">target_memory_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNodeInput">target_ocpus_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShapeInput">target_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrenceInput">time_recurrence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode">target_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode">target_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape">target_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence">time_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_memory_per_node_input`<sup>Optional</sup> <a name="target_memory_per_node_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNodeInput"></a>

```python
target_memory_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_ocpus_per_node_input`<sup>Optional</sup> <a name="target_ocpus_per_node_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNodeInput"></a>

```python
target_ocpus_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_shape_input`<sup>Optional</sup> <a name="target_shape_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShapeInput"></a>

```python
target_shape_input: str
```

- *Type:* str

---

##### `time_recurrence_input`<sup>Optional</sup> <a name="time_recurrence_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrenceInput"></a>

```python
time_recurrence_input: str
```

- *Type:* str

---

##### `target_memory_per_node`<sup>Required</sup> <a name="target_memory_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode"></a>

```python
target_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_ocpus_per_node`<sup>Required</sup> <a name="target_ocpus_per_node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode"></a>

```python
target_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_shape`<sup>Required</sup> <a name="target_shape" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape"></a>

```python
target_shape: str
```

- *Type:* str

---

##### `time_recurrence`<sup>Required</sup> <a name="time_recurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence"></a>

```python
time_recurrence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>]

---


### BdsAutoScalingConfigurationPolicyOutputReference <a name="BdsAutoScalingConfigurationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.putRules">put_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList">BdsAutoScalingConfigurationPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.rules"></a>

```python
rules: BdsAutoScalingConfigurationPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList">BdsAutoScalingConfigurationPolicyRulesList</a>

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]]

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a>

---


### BdsAutoScalingConfigurationPolicyRulesList <a name="BdsAutoScalingConfigurationPolicyRulesList" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BdsAutoScalingConfigurationPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BdsAutoScalingConfigurationPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]]

---


### BdsAutoScalingConfigurationPolicyRulesMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.putThreshold">put_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_threshold` <a name="put_threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.putThreshold"></a>

```python
def put_threshold(
  duration_in_minutes: typing.Union[int, float],
  operator: str,
  value: typing.Union[int, float]
) -> None
```

###### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.putThreshold.parameter.durationInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

###### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.putThreshold.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricTypeInput">metric_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.thresholdInput">threshold_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold"></a>

```python
threshold: BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference</a>

---

##### `metric_type_input`<sup>Optional</sup> <a name="metric_type_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricTypeInput"></a>

```python
metric_type_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.thresholdInput"></a>

```python
threshold_input: BdsAutoScalingConfigurationPolicyRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a>

---


### BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutesInput">duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes_input`<sup>Optional</sup> <a name="duration_in_minutes_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```python
duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: BdsAutoScalingConfigurationPolicyRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyRulesOutputReference <a name="BdsAutoScalingConfigurationPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.putMetric">put_metric</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.putMetric"></a>

```python
def put_metric(
  metric_type: str,
  threshold: BdsAutoScalingConfigurationPolicyRulesMetricThreshold
) -> None
```

###### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.putMetric.parameter.metricType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

###### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.putMetric.parameter.threshold"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference">BdsAutoScalingConfigurationPolicyRulesMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.metricInput">metric_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric"></a>

```python
metric: BdsAutoScalingConfigurationPolicyRulesMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference">BdsAutoScalingConfigurationPolicyRulesMetricOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.metricInput"></a>

```python
metric_input: BdsAutoScalingConfigurationPolicyRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsAutoScalingConfigurationPolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules">BdsAutoScalingConfigurationPolicyRules</a>]

---


### BdsAutoScalingConfigurationTimeoutsOutputReference <a name="BdsAutoScalingConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_auto_scaling_configuration

bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsAutoScalingConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a>]

---



