# `demandSignalOccDemandSignal` Submodule <a name="`demandSignalOccDemandSignal` Submodule" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DemandSignalOccDemandSignal <a name="DemandSignalOccDemandSignal" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal oci_demand_signal_occ_demand_signal}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignal(
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
  is_active: typing.Union[bool, IResolvable],
  occ_demand_signals: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignals]],
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  occ_demand_signal_id: str = None,
  patch_operations: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalPatchOperations]] = None,
  timeouts: DemandSignalOccDemandSignalTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.occDemandSignals">occ_demand_signals</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]]</code> | occ_demand_signals block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.occDemandSignalId">occ_demand_signal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.patchOperations">patch_operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]]</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}.

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.isActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}.

---

##### `occ_demand_signals`<sup>Required</sup> <a name="occ_demand_signals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.occDemandSignals"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]]

occ_demand_signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signals DemandSignalOccDemandSignal#occ_demand_signals}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `occ_demand_signal_id`<sup>Optional</sup> <a name="occ_demand_signal_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.occDemandSignalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}.

---

##### `patch_operations`<sup>Optional</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.patchOperations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]]

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#patch_operations DemandSignalOccDemandSignal#patch_operations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#timeouts DemandSignalOccDemandSignal#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals">put_occ_demand_signals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations">put_patch_operations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId">reset_occ_demand_signal_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations">reset_patch_operations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_occ_demand_signals` <a name="put_occ_demand_signals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals"></a>

```python
def put_occ_demand_signals(
  value: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignals]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]]

---

##### `put_patch_operations` <a name="put_patch_operations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations"></a>

```python
def put_patch_operations(
  value: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalPatchOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_occ_demand_signal_id` <a name="reset_occ_demand_signal_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId"></a>

```python
def reset_occ_demand_signal_id() -> None
```

##### `reset_patch_operations` <a name="reset_patch_operations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations"></a>

```python
def reset_patch_operations() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DemandSignalOccDemandSignal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DemandSignalOccDemandSignal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DemandSignalOccDemandSignal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals">occ_demand_signals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations">patch_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput">is_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput">occ_demand_signal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput">occ_demand_signals_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput">patch_operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId">occ_demand_signal_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `occ_demand_signals`<sup>Required</sup> <a name="occ_demand_signals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals"></a>

```python
occ_demand_signals: DemandSignalOccDemandSignalOccDemandSignalsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a>

---

##### `patch_operations`<sup>Required</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations"></a>

```python
patch_operations: DemandSignalOccDemandSignalPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts"></a>

```python
timeouts: DemandSignalOccDemandSignalTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_active_input`<sup>Optional</sup> <a name="is_active_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput"></a>

```python
is_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `occ_demand_signal_id_input`<sup>Optional</sup> <a name="occ_demand_signal_id_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput"></a>

```python
occ_demand_signal_id_input: str
```

- *Type:* str

---

##### `occ_demand_signals_input`<sup>Optional</sup> <a name="occ_demand_signals_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput"></a>

```python
occ_demand_signals_input: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]]

---

##### `patch_operations_input`<sup>Optional</sup> <a name="patch_operations_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput"></a>

```python
patch_operations_input: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalPatchOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DemandSignalOccDemandSignalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `occ_demand_signal_id`<sup>Required</sup> <a name="occ_demand_signal_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId"></a>

```python
occ_demand_signal_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DemandSignalOccDemandSignalConfig <a name="DemandSignalOccDemandSignalConfig" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  is_active: typing.Union[bool, IResolvable],
  occ_demand_signals: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignals]],
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  occ_demand_signal_id: str = None,
  patch_operations: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalPatchOperations]] = None,
  timeouts: DemandSignalOccDemandSignalTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals">occ_demand_signals</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]]</code> | occ_demand_signals block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId">occ_demand_signal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations">patch_operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]]</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}.

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}.

---

##### `occ_demand_signals`<sup>Required</sup> <a name="occ_demand_signals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals"></a>

```python
occ_demand_signals: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]]

occ_demand_signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signals DemandSignalOccDemandSignal#occ_demand_signals}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `occ_demand_signal_id`<sup>Optional</sup> <a name="occ_demand_signal_id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId"></a>

```python
occ_demand_signal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}.

---

##### `patch_operations`<sup>Optional</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations"></a>

```python
patch_operations: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalPatchOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]]

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#patch_operations DemandSignalOccDemandSignal#patch_operations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts"></a>

```python
timeouts: DemandSignalOccDemandSignalTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#timeouts DemandSignalOccDemandSignal#timeouts}

---

### DemandSignalOccDemandSignalOccDemandSignals <a name="DemandSignalOccDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals(
  resource_type: str,
  units: str,
  values: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignalsValues]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units">units</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values">values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>]]</code> | values block. |

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}.

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units"></a>

```python
units: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values"></a>

```python
values: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignalsValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>]]

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#values DemandSignalOccDemandSignal#values}

---

### DemandSignalOccDemandSignalOccDemandSignalsValues <a name="DemandSignalOccDemandSignalOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues(
  time_expected: str,
  value: typing.Union[int, float],
  comments: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected">time_expected</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments">comments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}. |

---

##### `time_expected`<sup>Required</sup> <a name="time_expected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected"></a>

```python
time_expected: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `comments`<sup>Optional</sup> <a name="comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments"></a>

```python
comments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}.

---

### DemandSignalOccDemandSignalPatchOperations <a name="DemandSignalOccDemandSignalPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations(
  from: str,
  operation: str,
  selection: str,
  value: typing.Mapping[str],
  position: str = None,
  selected_item: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection">selection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value">value</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position">position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem">selected_item</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}. |

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}.

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection"></a>

```python
selection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value"></a>

```python
value: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position"></a>

```python
position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}.

---

##### `selected_item`<sup>Optional</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}.

---

### DemandSignalOccDemandSignalTimeouts <a name="DemandSignalOccDemandSignalTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DemandSignalOccDemandSignalOccDemandSignalsList <a name="DemandSignalOccDemandSignalOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DemandSignalOccDemandSignalOccDemandSignalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]]

---


### DemandSignalOccDemandSignalOccDemandSignalsOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues">put_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_values` <a name="put_values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues"></a>

```python
def put_values(
  value: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignalsValues]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput">units_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values"></a>

```python
values: DemandSignalOccDemandSignalOccDemandSignalsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a>

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `units_input`<sup>Optional</sup> <a name="units_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput"></a>

```python
units_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput"></a>

```python
values_input: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignalsValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>]]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DemandSignalOccDemandSignalOccDemandSignals]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals">DemandSignalOccDemandSignalOccDemandSignals</a>]

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesList <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalOccDemandSignalsValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>]]

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments">reset_comments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comments` <a name="reset_comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments"></a>

```python
def reset_comments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput">comments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput">time_expected_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments">comments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected">time_expected</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comments_input`<sup>Optional</sup> <a name="comments_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput"></a>

```python
comments_input: str
```

- *Type:* str

---

##### `time_expected_input`<sup>Optional</sup> <a name="time_expected_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput"></a>

```python
time_expected_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comments`<sup>Required</sup> <a name="comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments"></a>

```python
comments: str
```

- *Type:* str

---

##### `time_expected`<sup>Required</sup> <a name="time_expected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```python
time_expected: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DemandSignalOccDemandSignalOccDemandSignalsValues]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues">DemandSignalOccDemandSignalOccDemandSignalsValues</a>]

---


### DemandSignalOccDemandSignalPatchOperationsList <a name="DemandSignalOccDemandSignalPatchOperationsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DemandSignalOccDemandSignalPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DemandSignalOccDemandSignalPatchOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]]

---


### DemandSignalOccDemandSignalPatchOperationsOutputReference <a name="DemandSignalOccDemandSignalPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem">reset_selected_item</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_position` <a name="reset_position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_selected_item` <a name="reset_selected_item" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem"></a>

```python
def reset_selected_item() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput">position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput">selected_item_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput">selection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem">selected_item</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection">selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value">value</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput"></a>

```python
position_input: str
```

- *Type:* str

---

##### `selected_item_input`<sup>Optional</sup> <a name="selected_item_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput"></a>

```python
selected_item_input: str
```

- *Type:* str

---

##### `selection_input`<sup>Optional</sup> <a name="selection_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput"></a>

```python
selection_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput"></a>

```python
value_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `selected_item`<sup>Required</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection"></a>

```python
selection: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value"></a>

```python
value: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DemandSignalOccDemandSignalPatchOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations">DemandSignalOccDemandSignalPatchOperations</a>]

---


### DemandSignalOccDemandSignalTimeoutsOutputReference <a name="DemandSignalOccDemandSignalTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import demand_signal_occ_demand_signal

demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DemandSignalOccDemandSignalTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>]

---



