# `operatorAccessControlOperatorControl` Submodule <a name="`operatorAccessControlOperatorControl` Submodule" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OperatorAccessControlOperatorControl <a name="OperatorAccessControlOperatorControl" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control oci_operator_access_control_operator_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  approver_groups_list: typing.List[str],
  compartment_id: str,
  is_fully_pre_approved: typing.Union[bool, IResolvable],
  operator_control_name: str,
  resource_type: str,
  approvers_list: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  email_id_list: typing.List[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  number_of_approvers: typing.Union[int, float] = None,
  pre_approved_op_action_list: typing.List[str] = None,
  system_message: str = None,
  timeouts: OperatorAccessControlOperatorControlTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.approverGroupsList">approver_groups_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.isFullyPreApproved">is_fully_pre_approved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.operatorControlName">operator_control_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.approversList">approvers_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.emailIdList">email_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.numberOfApprovers">number_of_approvers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.preApprovedOpActionList">pre_approved_op_action_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.systemMessage">system_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approver_groups_list`<sup>Required</sup> <a name="approver_groups_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.approverGroupsList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}.

---

##### `is_fully_pre_approved`<sup>Required</sup> <a name="is_fully_pre_approved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.isFullyPreApproved"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}.

---

##### `operator_control_name`<sup>Required</sup> <a name="operator_control_name" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.operatorControlName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}.

---

##### `approvers_list`<sup>Optional</sup> <a name="approvers_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.approversList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}.

---

##### `email_id_list`<sup>Optional</sup> <a name="email_id_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.emailIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `number_of_approvers`<sup>Optional</sup> <a name="number_of_approvers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.numberOfApprovers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}.

---

##### `pre_approved_op_action_list`<sup>Optional</sup> <a name="pre_approved_op_action_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.preApprovedOpActionList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}.

---

##### `system_message`<sup>Optional</sup> <a name="system_message" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.systemMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#timeouts OperatorAccessControlOperatorControl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetApproversList">reset_approvers_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetEmailIdList">reset_email_id_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetNumberOfApprovers">reset_number_of_approvers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetPreApprovedOpActionList">reset_pre_approved_op_action_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetSystemMessage">reset_system_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}.

---

##### `reset_approvers_list` <a name="reset_approvers_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetApproversList"></a>

```python
def reset_approvers_list() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_email_id_list` <a name="reset_email_id_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetEmailIdList"></a>

```python
def reset_email_id_list() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_number_of_approvers` <a name="reset_number_of_approvers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetNumberOfApprovers"></a>

```python
def reset_number_of_approvers() -> None
```

##### `reset_pre_approved_op_action_list` <a name="reset_pre_approved_op_action_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetPreApprovedOpActionList"></a>

```python
def reset_pre_approved_op_action_list() -> None
```

##### `reset_system_message` <a name="reset_system_message" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetSystemMessage"></a>

```python
def reset_system_message() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OperatorAccessControlOperatorControl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OperatorAccessControlOperatorControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OperatorAccessControlOperatorControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approvalRequiredOpActionList">approval_required_op_action_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isDefaultOperatorControl">is_default_operator_control</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lastModifiedInfo">last_modified_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfCreation">time_of_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfModification">time_of_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference">OperatorAccessControlOperatorControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsListInput">approver_groups_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversListInput">approvers_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdListInput">email_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApprovedInput">is_fully_pre_approved_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApproversInput">number_of_approvers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlNameInput">operator_control_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionListInput">pre_approved_op_action_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessageInput">system_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsList">approver_groups_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversList">approvers_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdList">email_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApproved">is_fully_pre_approved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApprovers">number_of_approvers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlName">operator_control_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionList">pre_approved_op_action_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessage">system_message</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_required_op_action_list`<sup>Required</sup> <a name="approval_required_op_action_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approvalRequiredOpActionList"></a>

```python
approval_required_op_action_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_default_operator_control`<sup>Required</sup> <a name="is_default_operator_control" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isDefaultOperatorControl"></a>

```python
is_default_operator_control: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_modified_info`<sup>Required</sup> <a name="last_modified_info" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lastModifiedInfo"></a>

```python
last_modified_info: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_of_creation`<sup>Required</sup> <a name="time_of_creation" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfCreation"></a>

```python
time_of_creation: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `time_of_modification`<sup>Required</sup> <a name="time_of_modification" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfModification"></a>

```python
time_of_modification: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeouts"></a>

```python
timeouts: OperatorAccessControlOperatorControlTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference">OperatorAccessControlOperatorControlTimeoutsOutputReference</a>

---

##### `approver_groups_list_input`<sup>Optional</sup> <a name="approver_groups_list_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsListInput"></a>

```python
approver_groups_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approvers_list_input`<sup>Optional</sup> <a name="approvers_list_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversListInput"></a>

```python
approvers_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `email_id_list_input`<sup>Optional</sup> <a name="email_id_list_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdListInput"></a>

```python
email_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_fully_pre_approved_input`<sup>Optional</sup> <a name="is_fully_pre_approved_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApprovedInput"></a>

```python
is_fully_pre_approved_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `number_of_approvers_input`<sup>Optional</sup> <a name="number_of_approvers_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApproversInput"></a>

```python
number_of_approvers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_control_name_input`<sup>Optional</sup> <a name="operator_control_name_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlNameInput"></a>

```python
operator_control_name_input: str
```

- *Type:* str

---

##### `pre_approved_op_action_list_input`<sup>Optional</sup> <a name="pre_approved_op_action_list_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionListInput"></a>

```python
pre_approved_op_action_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `system_message_input`<sup>Optional</sup> <a name="system_message_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessageInput"></a>

```python
system_message_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OperatorAccessControlOperatorControlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>]

---

##### `approver_groups_list`<sup>Required</sup> <a name="approver_groups_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsList"></a>

```python
approver_groups_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approvers_list`<sup>Required</sup> <a name="approvers_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversList"></a>

```python
approvers_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `email_id_list`<sup>Required</sup> <a name="email_id_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdList"></a>

```python
email_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_fully_pre_approved`<sup>Required</sup> <a name="is_fully_pre_approved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApproved"></a>

```python
is_fully_pre_approved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `number_of_approvers`<sup>Required</sup> <a name="number_of_approvers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApprovers"></a>

```python
number_of_approvers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_control_name`<sup>Required</sup> <a name="operator_control_name" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlName"></a>

```python
operator_control_name: str
```

- *Type:* str

---

##### `pre_approved_op_action_list`<sup>Required</sup> <a name="pre_approved_op_action_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionList"></a>

```python
pre_approved_op_action_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `system_message`<sup>Required</sup> <a name="system_message" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessage"></a>

```python
system_message: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OperatorAccessControlOperatorControlConfig <a name="OperatorAccessControlOperatorControlConfig" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  approver_groups_list: typing.List[str],
  compartment_id: str,
  is_fully_pre_approved: typing.Union[bool, IResolvable],
  operator_control_name: str,
  resource_type: str,
  approvers_list: typing.List[str] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  email_id_list: typing.List[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  number_of_approvers: typing.Union[int, float] = None,
  pre_approved_op_action_list: typing.List[str] = None,
  system_message: str = None,
  timeouts: OperatorAccessControlOperatorControlTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approverGroupsList">approver_groups_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.isFullyPreApproved">is_fully_pre_approved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.operatorControlName">operator_control_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approversList">approvers_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.emailIdList">email_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.numberOfApprovers">number_of_approvers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.preApprovedOpActionList">pre_approved_op_action_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.systemMessage">system_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approver_groups_list`<sup>Required</sup> <a name="approver_groups_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approverGroupsList"></a>

```python
approver_groups_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}.

---

##### `is_fully_pre_approved`<sup>Required</sup> <a name="is_fully_pre_approved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.isFullyPreApproved"></a>

```python
is_fully_pre_approved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}.

---

##### `operator_control_name`<sup>Required</sup> <a name="operator_control_name" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.operatorControlName"></a>

```python
operator_control_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}.

---

##### `approvers_list`<sup>Optional</sup> <a name="approvers_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approversList"></a>

```python
approvers_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}.

---

##### `email_id_list`<sup>Optional</sup> <a name="email_id_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.emailIdList"></a>

```python
email_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `number_of_approvers`<sup>Optional</sup> <a name="number_of_approvers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.numberOfApprovers"></a>

```python
number_of_approvers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}.

---

##### `pre_approved_op_action_list`<sup>Optional</sup> <a name="pre_approved_op_action_list" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.preApprovedOpActionList"></a>

```python
pre_approved_op_action_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}.

---

##### `system_message`<sup>Optional</sup> <a name="system_message" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.systemMessage"></a>

```python
system_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.timeouts"></a>

```python
timeouts: OperatorAccessControlOperatorControlTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#timeouts OperatorAccessControlOperatorControl#timeouts}

---

### OperatorAccessControlOperatorControlTimeouts <a name="OperatorAccessControlOperatorControlTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OperatorAccessControlOperatorControlTimeoutsOutputReference <a name="OperatorAccessControlOperatorControlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import operator_access_control_operator_control

operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OperatorAccessControlOperatorControlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>]

---



