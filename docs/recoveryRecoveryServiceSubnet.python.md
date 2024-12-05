# `recoveryRecoveryServiceSubnet` Submodule <a name="`recoveryRecoveryServiceSubnet` Submodule" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryRecoveryServiceSubnet <a name="RecoveryRecoveryServiceSubnet" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet oci_recovery_recovery_service_subnet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_recovery_service_subnet

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet(
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
  vcn_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  nsg_ids: typing.List[str] = None,
  subnet_id: str = None,
  subnets: typing.List[str] = None,
  timeouts: RecoveryRecoveryServiceSubnetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#compartment_id RecoveryRecoveryServiceSubnet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#display_name RecoveryRecoveryServiceSubnet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#vcn_id RecoveryRecoveryServiceSubnet#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#defined_tags RecoveryRecoveryServiceSubnet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#freeform_tags RecoveryRecoveryServiceSubnet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#id RecoveryRecoveryServiceSubnet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#nsg_ids RecoveryRecoveryServiceSubnet#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnet_id RecoveryRecoveryServiceSubnet#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnets RecoveryRecoveryServiceSubnet#subnets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#compartment_id RecoveryRecoveryServiceSubnet#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#display_name RecoveryRecoveryServiceSubnet#display_name}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#vcn_id RecoveryRecoveryServiceSubnet#vcn_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#defined_tags RecoveryRecoveryServiceSubnet#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#freeform_tags RecoveryRecoveryServiceSubnet#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#id RecoveryRecoveryServiceSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#nsg_ids RecoveryRecoveryServiceSubnet#nsg_ids}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnet_id RecoveryRecoveryServiceSubnet#subnet_id}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnets RecoveryRecoveryServiceSubnet#subnets}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#timeouts RecoveryRecoveryServiceSubnet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#create RecoveryRecoveryServiceSubnet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#delete RecoveryRecoveryServiceSubnet#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#update RecoveryRecoveryServiceSubnet#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RecoveryRecoveryServiceSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_recovery_service_subnet

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_recovery_service_subnet

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_recovery_service_subnet

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_recovery_service_subnet

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RecoveryRecoveryServiceSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RecoveryRecoveryServiceSubnet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RecoveryRecoveryServiceSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RecoveryRecoveryServiceSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference">RecoveryRecoveryServiceSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeouts"></a>

```python
timeouts: RecoveryRecoveryServiceSubnetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference">RecoveryRecoveryServiceSubnetTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RecoveryRecoveryServiceSubnetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>]

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryRecoveryServiceSubnetConfig <a name="RecoveryRecoveryServiceSubnetConfig" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_recovery_service_subnet

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  vcn_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  nsg_ids: typing.List[str] = None,
  subnet_id: str = None,
  subnets: typing.List[str] = None,
  timeouts: RecoveryRecoveryServiceSubnetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#compartment_id RecoveryRecoveryServiceSubnet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#display_name RecoveryRecoveryServiceSubnet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#vcn_id RecoveryRecoveryServiceSubnet#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#defined_tags RecoveryRecoveryServiceSubnet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#freeform_tags RecoveryRecoveryServiceSubnet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#id RecoveryRecoveryServiceSubnet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#nsg_ids RecoveryRecoveryServiceSubnet#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnet_id RecoveryRecoveryServiceSubnet#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnets RecoveryRecoveryServiceSubnet#subnets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#compartment_id RecoveryRecoveryServiceSubnet#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#display_name RecoveryRecoveryServiceSubnet#display_name}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#vcn_id RecoveryRecoveryServiceSubnet#vcn_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#defined_tags RecoveryRecoveryServiceSubnet#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#freeform_tags RecoveryRecoveryServiceSubnet#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#id RecoveryRecoveryServiceSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#nsg_ids RecoveryRecoveryServiceSubnet#nsg_ids}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnet_id RecoveryRecoveryServiceSubnet#subnet_id}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnets RecoveryRecoveryServiceSubnet#subnets}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.timeouts"></a>

```python
timeouts: RecoveryRecoveryServiceSubnetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#timeouts RecoveryRecoveryServiceSubnet#timeouts}

---

### RecoveryRecoveryServiceSubnetTimeouts <a name="RecoveryRecoveryServiceSubnetTimeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_recovery_service_subnet

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#create RecoveryRecoveryServiceSubnet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#delete RecoveryRecoveryServiceSubnet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#update RecoveryRecoveryServiceSubnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#create RecoveryRecoveryServiceSubnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#delete RecoveryRecoveryServiceSubnet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#update RecoveryRecoveryServiceSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryRecoveryServiceSubnetTimeoutsOutputReference <a name="RecoveryRecoveryServiceSubnetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_recovery_service_subnet

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RecoveryRecoveryServiceSubnetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>]

---



