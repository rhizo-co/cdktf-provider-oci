# `apmSyntheticsDedicatedVantagePoint` Submodule <a name="`apmSyntheticsDedicatedVantagePoint` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsDedicatedVantagePoint <a name="ApmSyntheticsDedicatedVantagePoint" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point oci_apm_synthetics_dedicated_vantage_point}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  display_name: str,
  dvp_stack_details: ApmSyntheticsDedicatedVantagePointDvpStackDetails,
  region: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  status: str = None,
  timeouts: ApmSyntheticsDedicatedVantagePointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#apm_domain_id ApmSyntheticsDedicatedVantagePoint#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#display_name ApmSyntheticsDedicatedVantagePoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.dvpStackDetails">dvp_stack_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | dvp_stack_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#region ApmSyntheticsDedicatedVantagePoint#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#defined_tags ApmSyntheticsDedicatedVantagePoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#freeform_tags ApmSyntheticsDedicatedVantagePoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#id ApmSyntheticsDedicatedVantagePoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#status ApmSyntheticsDedicatedVantagePoint#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#apm_domain_id ApmSyntheticsDedicatedVantagePoint#apm_domain_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#display_name ApmSyntheticsDedicatedVantagePoint#display_name}.

---

##### `dvp_stack_details`<sup>Required</sup> <a name="dvp_stack_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.dvpStackDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

dvp_stack_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_details ApmSyntheticsDedicatedVantagePoint#dvp_stack_details}

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#region ApmSyntheticsDedicatedVantagePoint#region}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#defined_tags ApmSyntheticsDedicatedVantagePoint#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#freeform_tags ApmSyntheticsDedicatedVantagePoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#id ApmSyntheticsDedicatedVantagePoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#status ApmSyntheticsDedicatedVantagePoint#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#timeouts ApmSyntheticsDedicatedVantagePoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails">put_dvp_stack_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dvp_stack_details` <a name="put_dvp_stack_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails"></a>

```python
def put_dvp_stack_details(
  dvp_stack_id: str,
  dvp_stack_type: str,
  dvp_stream_id: str,
  dvp_version: str
) -> None
```

###### `dvp_stack_id`<sup>Required</sup> <a name="dvp_stack_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails.parameter.dvpStackId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_id ApmSyntheticsDedicatedVantagePoint#dvp_stack_id}.

---

###### `dvp_stack_type`<sup>Required</sup> <a name="dvp_stack_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails.parameter.dvpStackType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_type ApmSyntheticsDedicatedVantagePoint#dvp_stack_type}.

---

###### `dvp_stream_id`<sup>Required</sup> <a name="dvp_stream_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails.parameter.dvpStreamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stream_id ApmSyntheticsDedicatedVantagePoint#dvp_stream_id}.

---

###### `dvp_version`<sup>Required</sup> <a name="dvp_version" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails.parameter.dvpVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_version ApmSyntheticsDedicatedVantagePoint#dvp_version}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#create ApmSyntheticsDedicatedVantagePoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#delete ApmSyntheticsDedicatedVantagePoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#update ApmSyntheticsDedicatedVantagePoint#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApmSyntheticsDedicatedVantagePoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApmSyntheticsDedicatedVantagePoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApmSyntheticsDedicatedVantagePoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApmSyntheticsDedicatedVantagePoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsDedicatedVantagePoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetails">dvp_stack_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference">ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.monitorStatusCountMap">monitor_status_count_map</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference">ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetailsInput">dvp_stack_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dvp_stack_details`<sup>Required</sup> <a name="dvp_stack_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetails"></a>

```python
dvp_stack_details: ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference">ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference</a>

---

##### `monitor_status_count_map`<sup>Required</sup> <a name="monitor_status_count_map" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.monitorStatusCountMap"></a>

```python
monitor_status_count_map: ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeouts"></a>

```python
timeouts: ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference">ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dvp_stack_details_input`<sup>Optional</sup> <a name="dvp_stack_details_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetailsInput"></a>

```python
dvp_stack_details_input: ApmSyntheticsDedicatedVantagePointDvpStackDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApmSyntheticsDedicatedVantagePointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsDedicatedVantagePointConfig <a name="ApmSyntheticsDedicatedVantagePointConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  display_name: str,
  dvp_stack_details: ApmSyntheticsDedicatedVantagePointDvpStackDetails,
  region: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  status: str = None,
  timeouts: ApmSyntheticsDedicatedVantagePointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#apm_domain_id ApmSyntheticsDedicatedVantagePoint#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#display_name ApmSyntheticsDedicatedVantagePoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dvpStackDetails">dvp_stack_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | dvp_stack_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#region ApmSyntheticsDedicatedVantagePoint#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#defined_tags ApmSyntheticsDedicatedVantagePoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#freeform_tags ApmSyntheticsDedicatedVantagePoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#id ApmSyntheticsDedicatedVantagePoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#status ApmSyntheticsDedicatedVantagePoint#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#apm_domain_id ApmSyntheticsDedicatedVantagePoint#apm_domain_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#display_name ApmSyntheticsDedicatedVantagePoint#display_name}.

---

##### `dvp_stack_details`<sup>Required</sup> <a name="dvp_stack_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dvpStackDetails"></a>

```python
dvp_stack_details: ApmSyntheticsDedicatedVantagePointDvpStackDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

dvp_stack_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_details ApmSyntheticsDedicatedVantagePoint#dvp_stack_details}

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#region ApmSyntheticsDedicatedVantagePoint#region}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#defined_tags ApmSyntheticsDedicatedVantagePoint#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#freeform_tags ApmSyntheticsDedicatedVantagePoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#id ApmSyntheticsDedicatedVantagePoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#status ApmSyntheticsDedicatedVantagePoint#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.timeouts"></a>

```python
timeouts: ApmSyntheticsDedicatedVantagePointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#timeouts ApmSyntheticsDedicatedVantagePoint#timeouts}

---

### ApmSyntheticsDedicatedVantagePointDvpStackDetails <a name="ApmSyntheticsDedicatedVantagePointDvpStackDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails(
  dvp_stack_id: str,
  dvp_stack_type: str,
  dvp_stream_id: str,
  dvp_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackId">dvp_stack_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_id ApmSyntheticsDedicatedVantagePoint#dvp_stack_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackType">dvp_stack_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_type ApmSyntheticsDedicatedVantagePoint#dvp_stack_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStreamId">dvp_stream_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stream_id ApmSyntheticsDedicatedVantagePoint#dvp_stream_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpVersion">dvp_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_version ApmSyntheticsDedicatedVantagePoint#dvp_version}. |

---

##### `dvp_stack_id`<sup>Required</sup> <a name="dvp_stack_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackId"></a>

```python
dvp_stack_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_id ApmSyntheticsDedicatedVantagePoint#dvp_stack_id}.

---

##### `dvp_stack_type`<sup>Required</sup> <a name="dvp_stack_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackType"></a>

```python
dvp_stack_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_type ApmSyntheticsDedicatedVantagePoint#dvp_stack_type}.

---

##### `dvp_stream_id`<sup>Required</sup> <a name="dvp_stream_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStreamId"></a>

```python
dvp_stream_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stream_id ApmSyntheticsDedicatedVantagePoint#dvp_stream_id}.

---

##### `dvp_version`<sup>Required</sup> <a name="dvp_version" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpVersion"></a>

```python
dvp_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_version ApmSyntheticsDedicatedVantagePoint#dvp_version}.

---

### ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap <a name="ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap()
```


### ApmSyntheticsDedicatedVantagePointTimeouts <a name="ApmSyntheticsDedicatedVantagePointTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#create ApmSyntheticsDedicatedVantagePoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#delete ApmSyntheticsDedicatedVantagePoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#update ApmSyntheticsDedicatedVantagePoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#create ApmSyntheticsDedicatedVantagePoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#delete ApmSyntheticsDedicatedVantagePoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#update ApmSyntheticsDedicatedVantagePoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference <a name="ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackIdInput">dvp_stack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackTypeInput">dvp_stack_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamIdInput">dvp_stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersionInput">dvp_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackId">dvp_stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackType">dvp_stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamId">dvp_stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersion">dvp_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dvp_stack_id_input`<sup>Optional</sup> <a name="dvp_stack_id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackIdInput"></a>

```python
dvp_stack_id_input: str
```

- *Type:* str

---

##### `dvp_stack_type_input`<sup>Optional</sup> <a name="dvp_stack_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackTypeInput"></a>

```python
dvp_stack_type_input: str
```

- *Type:* str

---

##### `dvp_stream_id_input`<sup>Optional</sup> <a name="dvp_stream_id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamIdInput"></a>

```python
dvp_stream_id_input: str
```

- *Type:* str

---

##### `dvp_version_input`<sup>Optional</sup> <a name="dvp_version_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersionInput"></a>

```python
dvp_version_input: str
```

- *Type:* str

---

##### `dvp_stack_id`<sup>Required</sup> <a name="dvp_stack_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackId"></a>

```python
dvp_stack_id: str
```

- *Type:* str

---

##### `dvp_stack_type`<sup>Required</sup> <a name="dvp_stack_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackType"></a>

```python
dvp_stack_type: str
```

- *Type:* str

---

##### `dvp_stream_id`<sup>Required</sup> <a name="dvp_stream_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamId"></a>

```python
dvp_stream_id: str
```

- *Type:* str

---

##### `dvp_version`<sup>Required</sup> <a name="dvp_version" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersion"></a>

```python
dvp_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsDedicatedVantagePointDvpStackDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

---


### ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList <a name="ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference <a name="ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.invalid">invalid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.disabled"></a>

```python
disabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.enabled"></a>

```python
enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.invalid"></a>

```python
invalid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap</a>

---


### ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference <a name="ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_dedicated_vantage_point

apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmSyntheticsDedicatedVantagePointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>]

---



