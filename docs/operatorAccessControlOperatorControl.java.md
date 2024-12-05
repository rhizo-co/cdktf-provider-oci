# `operatorAccessControlOperatorControl` Submodule <a name="`operatorAccessControlOperatorControl` Submodule" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OperatorAccessControlOperatorControl <a name="OperatorAccessControlOperatorControl" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control oci_operator_access_control_operator_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.operator_access_control_operator_control.OperatorAccessControlOperatorControl;

OperatorAccessControlOperatorControl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .approverGroupsList(java.util.List<java.lang.String>)
    .compartmentId(java.lang.String)
    .isFullyPreApproved(java.lang.Boolean)
    .isFullyPreApproved(IResolvable)
    .operatorControlName(java.lang.String)
    .resourceType(java.lang.String)
//  .approversList(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .emailIdList(java.util.List<java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .numberOfApprovers(java.lang.Number)
//  .preApprovedOpActionList(java.util.List<java.lang.String>)
//  .systemMessage(java.lang.String)
//  .timeouts(OperatorAccessControlOperatorControlTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.approverGroupsList">approverGroupsList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.isFullyPreApproved">isFullyPreApproved</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.operatorControlName">operatorControlName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.approversList">approversList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.emailIdList">emailIdList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.numberOfApprovers">numberOfApprovers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.preApprovedOpActionList">preApprovedOpActionList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.systemMessage">systemMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approverGroupsList`<sup>Required</sup> <a name="approverGroupsList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.approverGroupsList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}.

---

##### `isFullyPreApproved`<sup>Required</sup> <a name="isFullyPreApproved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.isFullyPreApproved"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}.

---

##### `operatorControlName`<sup>Required</sup> <a name="operatorControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.operatorControlName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}.

---

##### `approversList`<sup>Optional</sup> <a name="approversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.approversList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}.

---

##### `emailIdList`<sup>Optional</sup> <a name="emailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.emailIdList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `numberOfApprovers`<sup>Optional</sup> <a name="numberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.numberOfApprovers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}.

---

##### `preApprovedOpActionList`<sup>Optional</sup> <a name="preApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.preApprovedOpActionList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}.

---

##### `systemMessage`<sup>Optional</sup> <a name="systemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.systemMessage"></a>

- *Type:* java.lang.String

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
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetApproversList">resetApproversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetEmailIdList">resetEmailIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetNumberOfApprovers">resetNumberOfApprovers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetPreApprovedOpActionList">resetPreApprovedOpActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetSystemMessage">resetSystemMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts"></a>

```java
public void putTimeouts(OperatorAccessControlOperatorControlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

---

##### `resetApproversList` <a name="resetApproversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetApproversList"></a>

```java
public void resetApproversList()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEmailIdList` <a name="resetEmailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetEmailIdList"></a>

```java
public void resetEmailIdList()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetId"></a>

```java
public void resetId()
```

##### `resetNumberOfApprovers` <a name="resetNumberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetNumberOfApprovers"></a>

```java
public void resetNumberOfApprovers()
```

##### `resetPreApprovedOpActionList` <a name="resetPreApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetPreApprovedOpActionList"></a>

```java
public void resetPreApprovedOpActionList()
```

##### `resetSystemMessage` <a name="resetSystemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetSystemMessage"></a>

```java
public void resetSystemMessage()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.operator_access_control_operator_control.OperatorAccessControlOperatorControl;

OperatorAccessControlOperatorControl.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.operator_access_control_operator_control.OperatorAccessControlOperatorControl;

OperatorAccessControlOperatorControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.operator_access_control_operator_control.OperatorAccessControlOperatorControl;

OperatorAccessControlOperatorControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.operator_access_control_operator_control.OperatorAccessControlOperatorControl;

OperatorAccessControlOperatorControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OperatorAccessControlOperatorControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OperatorAccessControlOperatorControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OperatorAccessControlOperatorControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OperatorAccessControlOperatorControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approvalRequiredOpActionList">approvalRequiredOpActionList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isDefaultOperatorControl">isDefaultOperatorControl</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lastModifiedInfo">lastModifiedInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfCreation">timeOfCreation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfDeletion">timeOfDeletion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfModification">timeOfModification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference">OperatorAccessControlOperatorControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsListInput">approverGroupsListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversListInput">approversListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdListInput">emailIdListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApprovedInput">isFullyPreApprovedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApproversInput">numberOfApproversInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlNameInput">operatorControlNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionListInput">preApprovedOpActionListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessageInput">systemMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsList">approverGroupsList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversList">approversList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdList">emailIdList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApproved">isFullyPreApproved</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApprovers">numberOfApprovers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlName">operatorControlName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionList">preApprovedOpActionList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessage">systemMessage</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalRequiredOpActionList`<sup>Required</sup> <a name="approvalRequiredOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approvalRequiredOpActionList"></a>

```java
public java.util.List<java.lang.String> getApprovalRequiredOpActionList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isDefaultOperatorControl`<sup>Required</sup> <a name="isDefaultOperatorControl" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isDefaultOperatorControl"></a>

```java
public IResolvable getIsDefaultOperatorControl();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastModifiedInfo`<sup>Required</sup> <a name="lastModifiedInfo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lastModifiedInfo"></a>

```java
public java.lang.String getLastModifiedInfo();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeOfCreation`<sup>Required</sup> <a name="timeOfCreation" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfCreation"></a>

```java
public java.lang.String getTimeOfCreation();
```

- *Type:* java.lang.String

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfDeletion"></a>

```java
public java.lang.String getTimeOfDeletion();
```

- *Type:* java.lang.String

---

##### `timeOfModification`<sup>Required</sup> <a name="timeOfModification" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfModification"></a>

```java
public java.lang.String getTimeOfModification();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeouts"></a>

```java
public OperatorAccessControlOperatorControlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference">OperatorAccessControlOperatorControlTimeoutsOutputReference</a>

---

##### `approverGroupsListInput`<sup>Optional</sup> <a name="approverGroupsListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsListInput"></a>

```java
public java.util.List<java.lang.String> getApproverGroupsListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approversListInput`<sup>Optional</sup> <a name="approversListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversListInput"></a>

```java
public java.util.List<java.lang.String> getApproversListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `emailIdListInput`<sup>Optional</sup> <a name="emailIdListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdListInput"></a>

```java
public java.util.List<java.lang.String> getEmailIdListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isFullyPreApprovedInput`<sup>Optional</sup> <a name="isFullyPreApprovedInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApprovedInput"></a>

```java
public java.lang.Object getIsFullyPreApprovedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numberOfApproversInput`<sup>Optional</sup> <a name="numberOfApproversInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApproversInput"></a>

```java
public java.lang.Number getNumberOfApproversInput();
```

- *Type:* java.lang.Number

---

##### `operatorControlNameInput`<sup>Optional</sup> <a name="operatorControlNameInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlNameInput"></a>

```java
public java.lang.String getOperatorControlNameInput();
```

- *Type:* java.lang.String

---

##### `preApprovedOpActionListInput`<sup>Optional</sup> <a name="preApprovedOpActionListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionListInput"></a>

```java
public java.util.List<java.lang.String> getPreApprovedOpActionListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `systemMessageInput`<sup>Optional</sup> <a name="systemMessageInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessageInput"></a>

```java
public java.lang.String getSystemMessageInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

---

##### `approverGroupsList`<sup>Required</sup> <a name="approverGroupsList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsList"></a>

```java
public java.util.List<java.lang.String> getApproverGroupsList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approversList`<sup>Required</sup> <a name="approversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversList"></a>

```java
public java.util.List<java.lang.String> getApproversList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `emailIdList`<sup>Required</sup> <a name="emailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdList"></a>

```java
public java.util.List<java.lang.String> getEmailIdList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isFullyPreApproved`<sup>Required</sup> <a name="isFullyPreApproved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApproved"></a>

```java
public java.lang.Object getIsFullyPreApproved();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numberOfApprovers`<sup>Required</sup> <a name="numberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApprovers"></a>

```java
public java.lang.Number getNumberOfApprovers();
```

- *Type:* java.lang.Number

---

##### `operatorControlName`<sup>Required</sup> <a name="operatorControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlName"></a>

```java
public java.lang.String getOperatorControlName();
```

- *Type:* java.lang.String

---

##### `preApprovedOpActionList`<sup>Required</sup> <a name="preApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionList"></a>

```java
public java.util.List<java.lang.String> getPreApprovedOpActionList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `systemMessage`<sup>Required</sup> <a name="systemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessage"></a>

```java
public java.lang.String getSystemMessage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OperatorAccessControlOperatorControlConfig <a name="OperatorAccessControlOperatorControlConfig" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.operator_access_control_operator_control.OperatorAccessControlOperatorControlConfig;

OperatorAccessControlOperatorControlConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .approverGroupsList(java.util.List<java.lang.String>)
    .compartmentId(java.lang.String)
    .isFullyPreApproved(java.lang.Boolean)
    .isFullyPreApproved(IResolvable)
    .operatorControlName(java.lang.String)
    .resourceType(java.lang.String)
//  .approversList(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .emailIdList(java.util.List<java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .numberOfApprovers(java.lang.Number)
//  .preApprovedOpActionList(java.util.List<java.lang.String>)
//  .systemMessage(java.lang.String)
//  .timeouts(OperatorAccessControlOperatorControlTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approverGroupsList">approverGroupsList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.isFullyPreApproved">isFullyPreApproved</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.operatorControlName">operatorControlName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approversList">approversList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.emailIdList">emailIdList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.numberOfApprovers">numberOfApprovers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.preApprovedOpActionList">preApprovedOpActionList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.systemMessage">systemMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approverGroupsList`<sup>Required</sup> <a name="approverGroupsList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approverGroupsList"></a>

```java
public java.util.List<java.lang.String> getApproverGroupsList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}.

---

##### `isFullyPreApproved`<sup>Required</sup> <a name="isFullyPreApproved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.isFullyPreApproved"></a>

```java
public java.lang.Object getIsFullyPreApproved();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}.

---

##### `operatorControlName`<sup>Required</sup> <a name="operatorControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.operatorControlName"></a>

```java
public java.lang.String getOperatorControlName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}.

---

##### `approversList`<sup>Optional</sup> <a name="approversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approversList"></a>

```java
public java.util.List<java.lang.String> getApproversList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}.

---

##### `emailIdList`<sup>Optional</sup> <a name="emailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.emailIdList"></a>

```java
public java.util.List<java.lang.String> getEmailIdList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `numberOfApprovers`<sup>Optional</sup> <a name="numberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.numberOfApprovers"></a>

```java
public java.lang.Number getNumberOfApprovers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}.

---

##### `preApprovedOpActionList`<sup>Optional</sup> <a name="preApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.preApprovedOpActionList"></a>

```java
public java.util.List<java.lang.String> getPreApprovedOpActionList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}.

---

##### `systemMessage`<sup>Optional</sup> <a name="systemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.systemMessage"></a>

```java
public java.lang.String getSystemMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.timeouts"></a>

```java
public OperatorAccessControlOperatorControlTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#timeouts OperatorAccessControlOperatorControl#timeouts}

---

### OperatorAccessControlOperatorControlTimeouts <a name="OperatorAccessControlOperatorControlTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.operator_access_control_operator_control.OperatorAccessControlOperatorControlTimeouts;

OperatorAccessControlOperatorControlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OperatorAccessControlOperatorControlTimeoutsOutputReference <a name="OperatorAccessControlOperatorControlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.operator_access_control_operator_control.OperatorAccessControlOperatorControlTimeoutsOutputReference;

new OperatorAccessControlOperatorControlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

---



