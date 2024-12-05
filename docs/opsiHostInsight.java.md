# `opsiHostInsight` Submodule <a name="`opsiHostInsight` Submodule" id="rhizo-co-terraform-provider-oci.opsiHostInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiHostInsight <a name="OpsiHostInsight" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight oci_opsi_host_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_host_insight.OpsiHostInsight;

OpsiHostInsight.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .entitySource(java.lang.String)
//  .computeId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .enterpriseManagerBridgeId(java.lang.String)
//  .enterpriseManagerEntityIdentifier(java.lang.String)
//  .enterpriseManagerIdentifier(java.lang.String)
//  .exadataInsightId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .managementAgentId(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(OpsiHostInsightTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.entitySource">entitySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.computeId">computeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.exadataInsightId">exadataInsightId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}.

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.entitySource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}.

---

##### `computeId`<sup>Optional</sup> <a name="computeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.computeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}.

---

##### `enterpriseManagerBridgeId`<sup>Optional</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerBridgeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}.

---

##### `enterpriseManagerEntityIdentifier`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerEntityIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}.

---

##### `enterpriseManagerIdentifier`<sup>Optional</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.enterpriseManagerIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}.

---

##### `exadataInsightId`<sup>Optional</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.exadataInsightId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.managementAgentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#timeouts OpsiHostInsight#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetComputeId">resetComputeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerBridgeId">resetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerEntityIdentifier">resetEnterpriseManagerEntityIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerIdentifier">resetEnterpriseManagerIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetExadataInsightId">resetExadataInsightId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts"></a>

```java
public void putTimeouts(OpsiHostInsightTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>

---

##### `resetComputeId` <a name="resetComputeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetComputeId"></a>

```java
public void resetComputeId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetEnterpriseManagerBridgeId` <a name="resetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerBridgeId"></a>

```java
public void resetEnterpriseManagerBridgeId()
```

##### `resetEnterpriseManagerEntityIdentifier` <a name="resetEnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerEntityIdentifier"></a>

```java
public void resetEnterpriseManagerEntityIdentifier()
```

##### `resetEnterpriseManagerIdentifier` <a name="resetEnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetEnterpriseManagerIdentifier"></a>

```java
public void resetEnterpriseManagerIdentifier()
```

##### `resetExadataInsightId` <a name="resetExadataInsightId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetExadataInsightId"></a>

```java
public void resetExadataInsightId()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetId"></a>

```java
public void resetId()
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetManagementAgentId"></a>

```java
public void resetManagementAgentId()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiHostInsight resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_host_insight.OpsiHostInsight;

OpsiHostInsight.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_host_insight.OpsiHostInsight;

OpsiHostInsight.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_host_insight.OpsiHostInsight;

OpsiHostInsight.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_host_insight.OpsiHostInsight;

OpsiHostInsight.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpsiHostInsight.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpsiHostInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpsiHostInsight to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpsiHostInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpsiHostInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityDisplayName">enterpriseManagerEntityDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityName">enterpriseManagerEntityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityType">enterpriseManagerEntityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostDisplayName">hostDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostType">hostType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformName">platformName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformType">platformType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.processorCount">processorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference">OpsiHostInsightTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeIdInput">computeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeIdInput">enterpriseManagerBridgeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifierInput">enterpriseManagerEntityIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifierInput">enterpriseManagerIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySourceInput">entitySourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightIdInput">exadataInsightIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeId">computeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySource">entitySource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightId">exadataInsightId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="enterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityDisplayName"></a>

```java
public java.lang.String getEnterpriseManagerEntityDisplayName();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerEntityName`<sup>Required</sup> <a name="enterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityName"></a>

```java
public java.lang.String getEnterpriseManagerEntityName();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerEntityType`<sup>Required</sup> <a name="enterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityType"></a>

```java
public java.lang.String getEnterpriseManagerEntityType();
```

- *Type:* java.lang.String

---

##### `hostDisplayName`<sup>Required</sup> <a name="hostDisplayName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostDisplayName"></a>

```java
public java.lang.String getHostDisplayName();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.hostType"></a>

```java
public java.lang.String getHostType();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `platformName`<sup>Required</sup> <a name="platformName" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformName"></a>

```java
public java.lang.String getPlatformName();
```

- *Type:* java.lang.String

---

##### `platformType`<sup>Required</sup> <a name="platformType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformType"></a>

```java
public java.lang.String getPlatformType();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `processorCount`<sup>Required</sup> <a name="processorCount" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.processorCount"></a>

```java
public java.lang.Number getProcessorCount();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeouts"></a>

```java
public OpsiHostInsightTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference">OpsiHostInsightTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeIdInput`<sup>Optional</sup> <a name="computeIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeIdInput"></a>

```java
public java.lang.String getComputeIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="enterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeIdInput"></a>

```java
public java.lang.String getEnterpriseManagerBridgeIdInput();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerEntityIdentifierInput`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifierInput"></a>

```java
public java.lang.String getEnterpriseManagerEntityIdentifierInput();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerIdentifierInput`<sup>Optional</sup> <a name="enterpriseManagerIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifierInput"></a>

```java
public java.lang.String getEnterpriseManagerIdentifierInput();
```

- *Type:* java.lang.String

---

##### `entitySourceInput`<sup>Optional</sup> <a name="entitySourceInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySourceInput"></a>

```java
public java.lang.String getEntitySourceInput();
```

- *Type:* java.lang.String

---

##### `exadataInsightIdInput`<sup>Optional</sup> <a name="exadataInsightIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightIdInput"></a>

```java
public java.lang.String getExadataInsightIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentIdInput"></a>

```java
public java.lang.String getManagementAgentIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeId`<sup>Required</sup> <a name="computeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.computeId"></a>

```java
public java.lang.String getComputeId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enterpriseManagerBridgeId`<sup>Required</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerBridgeId"></a>

```java
public java.lang.String getEnterpriseManagerBridgeId();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerEntityIdentifier"></a>

```java
public java.lang.String getEnterpriseManagerEntityIdentifier();
```

- *Type:* java.lang.String

---

##### `enterpriseManagerIdentifier`<sup>Required</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.enterpriseManagerIdentifier"></a>

```java
public java.lang.String getEnterpriseManagerIdentifier();
```

- *Type:* java.lang.String

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.entitySource"></a>

```java
public java.lang.String getEntitySource();
```

- *Type:* java.lang.String

---

##### `exadataInsightId`<sup>Required</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.exadataInsightId"></a>

```java
public java.lang.String getExadataInsightId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsight.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiHostInsightConfig <a name="OpsiHostInsightConfig" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_host_insight.OpsiHostInsightConfig;

OpsiHostInsightConfig.builder()
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
    .compartmentId(java.lang.String)
    .entitySource(java.lang.String)
//  .computeId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .enterpriseManagerBridgeId(java.lang.String)
//  .enterpriseManagerEntityIdentifier(java.lang.String)
//  .enterpriseManagerIdentifier(java.lang.String)
//  .exadataInsightId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .managementAgentId(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(OpsiHostInsightTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.entitySource">entitySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.computeId">computeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerBridgeId">enterpriseManagerBridgeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerEntityIdentifier">enterpriseManagerEntityIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerIdentifier">enterpriseManagerIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.exadataInsightId">exadataInsightId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compartment_id OpsiHostInsight#compartment_id}.

---

##### `entitySource`<sup>Required</sup> <a name="entitySource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.entitySource"></a>

```java
public java.lang.String getEntitySource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#entity_source OpsiHostInsight#entity_source}.

---

##### `computeId`<sup>Optional</sup> <a name="computeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.computeId"></a>

```java
public java.lang.String getComputeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#compute_id OpsiHostInsight#compute_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#defined_tags OpsiHostInsight#defined_tags}.

---

##### `enterpriseManagerBridgeId`<sup>Optional</sup> <a name="enterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerBridgeId"></a>

```java
public java.lang.String getEnterpriseManagerBridgeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_bridge_id OpsiHostInsight#enterprise_manager_bridge_id}.

---

##### `enterpriseManagerEntityIdentifier`<sup>Optional</sup> <a name="enterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerEntityIdentifier"></a>

```java
public java.lang.String getEnterpriseManagerEntityIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_entity_identifier OpsiHostInsight#enterprise_manager_entity_identifier}.

---

##### `enterpriseManagerIdentifier`<sup>Optional</sup> <a name="enterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.enterpriseManagerIdentifier"></a>

```java
public java.lang.String getEnterpriseManagerIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#enterprise_manager_identifier OpsiHostInsight#enterprise_manager_identifier}.

---

##### `exadataInsightId`<sup>Optional</sup> <a name="exadataInsightId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.exadataInsightId"></a>

```java
public java.lang.String getExadataInsightId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#exadata_insight_id OpsiHostInsight#exadata_insight_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#freeform_tags OpsiHostInsight#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#id OpsiHostInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#management_agent_id OpsiHostInsight#management_agent_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#status OpsiHostInsight#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightConfig.property.timeouts"></a>

```java
public OpsiHostInsightTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#timeouts OpsiHostInsight#timeouts}

---

### OpsiHostInsightTimeouts <a name="OpsiHostInsightTimeouts" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_host_insight.OpsiHostInsightTimeouts;

OpsiHostInsightTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#create OpsiHostInsight#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#delete OpsiHostInsight#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#update OpsiHostInsight#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#create OpsiHostInsight#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#delete OpsiHostInsight#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_host_insight#update OpsiHostInsight#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiHostInsightTimeoutsOutputReference <a name="OpsiHostInsightTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_host_insight.OpsiHostInsightTimeoutsOutputReference;

new OpsiHostInsightTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiHostInsight.OpsiHostInsightTimeouts">OpsiHostInsightTimeouts</a>

---



