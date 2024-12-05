# `dataSafeAuditPolicy` Submodule <a name="`dataSafeAuditPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeAuditPolicy <a name="DataSafeAuditPolicy" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy oci_data_safe_audit_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_policy_id: str,
  compartment_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  provision_trigger: typing.Union[int, float] = None,
  retrieve_from_target_trigger: typing.Union[int, float] = None,
  timeouts: DataSafeAuditPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.auditPolicyId">audit_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#audit_policy_id DataSafeAuditPolicy#audit_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#compartment_id DataSafeAuditPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#defined_tags DataSafeAuditPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#description DataSafeAuditPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#display_name DataSafeAuditPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#freeform_tags DataSafeAuditPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#id DataSafeAuditPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.provisionTrigger">provision_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#provision_trigger DataSafeAuditPolicy#provision_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.retrieveFromTargetTrigger">retrieve_from_target_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#retrieve_from_target_trigger DataSafeAuditPolicy#retrieve_from_target_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts">DataSafeAuditPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_policy_id`<sup>Required</sup> <a name="audit_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.auditPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#audit_policy_id DataSafeAuditPolicy#audit_policy_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#compartment_id DataSafeAuditPolicy#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#defined_tags DataSafeAuditPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#description DataSafeAuditPolicy#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#display_name DataSafeAuditPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#freeform_tags DataSafeAuditPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#id DataSafeAuditPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provision_trigger`<sup>Optional</sup> <a name="provision_trigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.provisionTrigger"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#provision_trigger DataSafeAuditPolicy#provision_trigger}.

---

##### `retrieve_from_target_trigger`<sup>Optional</sup> <a name="retrieve_from_target_trigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.retrieveFromTargetTrigger"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#retrieve_from_target_trigger DataSafeAuditPolicy#retrieve_from_target_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts">DataSafeAuditPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#timeouts DataSafeAuditPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetProvisionTrigger">reset_provision_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetRetrieveFromTargetTrigger">reset_retrieve_from_target_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#create DataSafeAuditPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#delete DataSafeAuditPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#update DataSafeAuditPolicy#update}.

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_provision_trigger` <a name="reset_provision_trigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetProvisionTrigger"></a>

```python
def reset_provision_trigger() -> None
```

##### `reset_retrieve_from_target_trigger` <a name="reset_retrieve_from_target_trigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetRetrieveFromTargetTrigger"></a>

```python
def reset_retrieve_from_target_trigger() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeAuditPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeAuditPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeAuditPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeAuditPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeAuditPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.auditConditions">audit_conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList">DataSafeAuditPolicyAuditConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.auditSpecifications">audit_specifications</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList">DataSafeAuditPolicyAuditSpecificationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.isDataSafeServiceAccountExcluded">is_data_safe_service_account_excluded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeLastProvisioned">time_last_provisioned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeLastRetrieved">time_last_retrieved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference">DataSafeAuditPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.auditPolicyIdInput">audit_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.provisionTriggerInput">provision_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.retrieveFromTargetTriggerInput">retrieve_from_target_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts">DataSafeAuditPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.auditPolicyId">audit_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.provisionTrigger">provision_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.retrieveFromTargetTrigger">retrieve_from_target_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_conditions`<sup>Required</sup> <a name="audit_conditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.auditConditions"></a>

```python
audit_conditions: DataSafeAuditPolicyAuditConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList">DataSafeAuditPolicyAuditConditionsList</a>

---

##### `audit_specifications`<sup>Required</sup> <a name="audit_specifications" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.auditSpecifications"></a>

```python
audit_specifications: DataSafeAuditPolicyAuditSpecificationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList">DataSafeAuditPolicyAuditSpecificationsList</a>

---

##### `is_data_safe_service_account_excluded`<sup>Required</sup> <a name="is_data_safe_service_account_excluded" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.isDataSafeServiceAccountExcluded"></a>

```python
is_data_safe_service_account_excluded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_provisioned`<sup>Required</sup> <a name="time_last_provisioned" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeLastProvisioned"></a>

```python
time_last_provisioned: str
```

- *Type:* str

---

##### `time_last_retrieved`<sup>Required</sup> <a name="time_last_retrieved" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeLastRetrieved"></a>

```python
time_last_retrieved: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeouts"></a>

```python
timeouts: DataSafeAuditPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference">DataSafeAuditPolicyTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `audit_policy_id_input`<sup>Optional</sup> <a name="audit_policy_id_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.auditPolicyIdInput"></a>

```python
audit_policy_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `provision_trigger_input`<sup>Optional</sup> <a name="provision_trigger_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.provisionTriggerInput"></a>

```python
provision_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retrieve_from_target_trigger_input`<sup>Optional</sup> <a name="retrieve_from_target_trigger_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.retrieveFromTargetTriggerInput"></a>

```python
retrieve_from_target_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeAuditPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts">DataSafeAuditPolicyTimeouts</a>]

---

##### `audit_policy_id`<sup>Required</sup> <a name="audit_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.auditPolicyId"></a>

```python
audit_policy_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provision_trigger`<sup>Required</sup> <a name="provision_trigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.provisionTrigger"></a>

```python
provision_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retrieve_from_target_trigger`<sup>Required</sup> <a name="retrieve_from_target_trigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.retrieveFromTargetTrigger"></a>

```python
retrieve_from_target_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeAuditPolicyAuditConditions <a name="DataSafeAuditPolicyAuditConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditions()
```


### DataSafeAuditPolicyAuditConditionsEnableConditions <a name="DataSafeAuditPolicyAuditConditionsEnableConditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditions()
```


### DataSafeAuditPolicyAuditSpecifications <a name="DataSafeAuditPolicyAuditSpecifications" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecifications"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecifications.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecifications()
```


### DataSafeAuditPolicyConfig <a name="DataSafeAuditPolicyConfig" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_policy_id: str,
  compartment_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  provision_trigger: typing.Union[int, float] = None,
  retrieve_from_target_trigger: typing.Union[int, float] = None,
  timeouts: DataSafeAuditPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.auditPolicyId">audit_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#audit_policy_id DataSafeAuditPolicy#audit_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#compartment_id DataSafeAuditPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#defined_tags DataSafeAuditPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#description DataSafeAuditPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#display_name DataSafeAuditPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#freeform_tags DataSafeAuditPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#id DataSafeAuditPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.provisionTrigger">provision_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#provision_trigger DataSafeAuditPolicy#provision_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.retrieveFromTargetTrigger">retrieve_from_target_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#retrieve_from_target_trigger DataSafeAuditPolicy#retrieve_from_target_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts">DataSafeAuditPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_policy_id`<sup>Required</sup> <a name="audit_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.auditPolicyId"></a>

```python
audit_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#audit_policy_id DataSafeAuditPolicy#audit_policy_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#compartment_id DataSafeAuditPolicy#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#defined_tags DataSafeAuditPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#description DataSafeAuditPolicy#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#display_name DataSafeAuditPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#freeform_tags DataSafeAuditPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#id DataSafeAuditPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provision_trigger`<sup>Optional</sup> <a name="provision_trigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.provisionTrigger"></a>

```python
provision_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#provision_trigger DataSafeAuditPolicy#provision_trigger}.

---

##### `retrieve_from_target_trigger`<sup>Optional</sup> <a name="retrieve_from_target_trigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.retrieveFromTargetTrigger"></a>

```python
retrieve_from_target_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#retrieve_from_target_trigger DataSafeAuditPolicy#retrieve_from_target_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyConfig.property.timeouts"></a>

```python
timeouts: DataSafeAuditPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts">DataSafeAuditPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#timeouts DataSafeAuditPolicy#timeouts}

---

### DataSafeAuditPolicyTimeouts <a name="DataSafeAuditPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#create DataSafeAuditPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#delete DataSafeAuditPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#update DataSafeAuditPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#create DataSafeAuditPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#delete DataSafeAuditPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_policy#update DataSafeAuditPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeAuditPolicyAuditConditionsEnableConditionsList <a name="DataSafeAuditPolicyAuditConditionsEnableConditionsList" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference <a name="DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.entityNames">entity_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.entitySelection">entity_selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.operationStatus">operation_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditions">DataSafeAuditPolicyAuditConditionsEnableConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_names`<sup>Required</sup> <a name="entity_names" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.entityNames"></a>

```python
entity_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entity_selection`<sup>Required</sup> <a name="entity_selection" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.entitySelection"></a>

```python
entity_selection: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `operation_status`<sup>Required</sup> <a name="operation_status" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.operationStatus"></a>

```python
operation_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeAuditPolicyAuditConditionsEnableConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditions">DataSafeAuditPolicyAuditConditionsEnableConditions</a>

---


### DataSafeAuditPolicyAuditConditionsList <a name="DataSafeAuditPolicyAuditConditionsList" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeAuditPolicyAuditConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeAuditPolicyAuditConditionsOutputReference <a name="DataSafeAuditPolicyAuditConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.auditPolicyName">audit_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.enableConditions">enable_conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList">DataSafeAuditPolicyAuditConditionsEnableConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.isDataSafeServiceAccountAudited">is_data_safe_service_account_audited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafe">is_priv_users_managed_by_data_safe</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditions">DataSafeAuditPolicyAuditConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_policy_name`<sup>Required</sup> <a name="audit_policy_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.auditPolicyName"></a>

```python
audit_policy_name: str
```

- *Type:* str

---

##### `enable_conditions`<sup>Required</sup> <a name="enable_conditions" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.enableConditions"></a>

```python
enable_conditions: DataSafeAuditPolicyAuditConditionsEnableConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsEnableConditionsList">DataSafeAuditPolicyAuditConditionsEnableConditionsList</a>

---

##### `is_data_safe_service_account_audited`<sup>Required</sup> <a name="is_data_safe_service_account_audited" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.isDataSafeServiceAccountAudited"></a>

```python
is_data_safe_service_account_audited: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_priv_users_managed_by_data_safe`<sup>Required</sup> <a name="is_priv_users_managed_by_data_safe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.isPrivUsersManagedByDataSafe"></a>

```python
is_priv_users_managed_by_data_safe: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeAuditPolicyAuditConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditConditions">DataSafeAuditPolicyAuditConditions</a>

---


### DataSafeAuditPolicyAuditSpecificationsList <a name="DataSafeAuditPolicyAuditSpecificationsList" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeAuditPolicyAuditSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeAuditPolicyAuditSpecificationsOutputReference <a name="DataSafeAuditPolicyAuditSpecificationsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.auditPolicyCategory">audit_policy_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.auditPolicyName">audit_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.databasePolicyNames">database_policy_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.enabledEntities">enabled_entities</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.enableStatus">enable_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isCreated">is_created</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isEnabledForAllUsers">is_enabled_for_all_users</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isSeededInDataSafe">is_seeded_in_data_safe</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isSeededInTarget">is_seeded_in_target</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isViewOnly">is_view_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.partiallyEnabledMsg">partially_enabled_msg</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecifications">DataSafeAuditPolicyAuditSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_policy_category`<sup>Required</sup> <a name="audit_policy_category" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.auditPolicyCategory"></a>

```python
audit_policy_category: str
```

- *Type:* str

---

##### `audit_policy_name`<sup>Required</sup> <a name="audit_policy_name" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.auditPolicyName"></a>

```python
audit_policy_name: str
```

- *Type:* str

---

##### `database_policy_names`<sup>Required</sup> <a name="database_policy_names" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.databasePolicyNames"></a>

```python
database_policy_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_entities`<sup>Required</sup> <a name="enabled_entities" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.enabledEntities"></a>

```python
enabled_entities: str
```

- *Type:* str

---

##### `enable_status`<sup>Required</sup> <a name="enable_status" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.enableStatus"></a>

```python
enable_status: str
```

- *Type:* str

---

##### `is_created`<sup>Required</sup> <a name="is_created" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isCreated"></a>

```python
is_created: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_enabled_for_all_users`<sup>Required</sup> <a name="is_enabled_for_all_users" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isEnabledForAllUsers"></a>

```python
is_enabled_for_all_users: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_seeded_in_data_safe`<sup>Required</sup> <a name="is_seeded_in_data_safe" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isSeededInDataSafe"></a>

```python
is_seeded_in_data_safe: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_seeded_in_target`<sup>Required</sup> <a name="is_seeded_in_target" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isSeededInTarget"></a>

```python
is_seeded_in_target: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_view_only`<sup>Required</sup> <a name="is_view_only" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.isViewOnly"></a>

```python
is_view_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `partially_enabled_msg`<sup>Required</sup> <a name="partially_enabled_msg" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.partiallyEnabledMsg"></a>

```python
partially_enabled_msg: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeAuditPolicyAuditSpecifications
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyAuditSpecifications">DataSafeAuditPolicyAuditSpecifications</a>

---


### DataSafeAuditPolicyTimeoutsOutputReference <a name="DataSafeAuditPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_audit_policy

dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts">DataSafeAuditPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeAuditPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditPolicy.DataSafeAuditPolicyTimeouts">DataSafeAuditPolicyTimeouts</a>]

---



