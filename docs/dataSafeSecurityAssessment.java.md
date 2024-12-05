# `dataSafeSecurityAssessment` Submodule <a name="`dataSafeSecurityAssessment` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSecurityAssessment <a name="DataSafeSecurityAssessment" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment oci_data_safe_security_assessment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessment;

DataSafeSecurityAssessment.Builder.create(Construct scope, java.lang.String id)
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
    .targetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAssessmentScheduled(java.lang.Boolean)
//  .isAssessmentScheduled(IResolvable)
//  .schedule(java.lang.String)
//  .timeouts(DataSafeSecurityAssessmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.isAssessmentScheduled">isAssessmentScheduled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAssessmentScheduled`<sup>Optional</sup> <a name="isAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.isAssessmentScheduled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#timeouts DataSafeSecurityAssessment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetIsAssessmentScheduled">resetIsAssessmentScheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts"></a>

```java
public void putTimeouts(DataSafeSecurityAssessmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetId"></a>

```java
public void resetId()
```

##### `resetIsAssessmentScheduled` <a name="resetIsAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetIsAssessmentScheduled"></a>

```java
public void resetIsAssessmentScheduled()
```

##### `resetSchedule` <a name="resetSchedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessment;

DataSafeSecurityAssessment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessment;

DataSafeSecurityAssessment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessment;

DataSafeSecurityAssessment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessment;

DataSafeSecurityAssessment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeSecurityAssessment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeSecurityAssessment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeSecurityAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSecurityAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredAssessmentIds">ignoredAssessmentIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredTargets">ignoredTargets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isBaseline">isBaseline</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isDeviatedFromBaseline">isDeviatedFromBaseline</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lastComparedBaselineId">lastComparedBaselineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.link">link</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleSecurityAssessmentId">scheduleSecurityAssessmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.statistics">statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList">DataSafeSecurityAssessmentStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIds">targetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeLastAssessed">timeLastAssessed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference">DataSafeSecurityAssessmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.triggeredBy">triggeredBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduledInput">isAssessmentScheduledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduled">isAssessmentScheduled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ignoredAssessmentIds`<sup>Required</sup> <a name="ignoredAssessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredAssessmentIds"></a>

```java
public java.util.List<java.lang.String> getIgnoredAssessmentIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ignoredTargets`<sup>Required</sup> <a name="ignoredTargets" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredTargets"></a>

```java
public java.util.List<java.lang.String> getIgnoredTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isBaseline`<sup>Required</sup> <a name="isBaseline" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isBaseline"></a>

```java
public IResolvable getIsBaseline();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDeviatedFromBaseline`<sup>Required</sup> <a name="isDeviatedFromBaseline" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isDeviatedFromBaseline"></a>

```java
public IResolvable getIsDeviatedFromBaseline();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastComparedBaselineId`<sup>Required</sup> <a name="lastComparedBaselineId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lastComparedBaselineId"></a>

```java
public java.lang.String getLastComparedBaselineId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.link"></a>

```java
public java.lang.String getLink();
```

- *Type:* java.lang.String

---

##### `scheduleSecurityAssessmentId`<sup>Required</sup> <a name="scheduleSecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleSecurityAssessmentId"></a>

```java
public java.lang.String getScheduleSecurityAssessmentId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.statistics"></a>

```java
public DataSafeSecurityAssessmentStatisticsList getStatistics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList">DataSafeSecurityAssessmentStatisticsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIds"></a>

```java
public java.util.List<java.lang.String> getTargetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetVersion"></a>

```java
public java.lang.String getTargetVersion();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastAssessed`<sup>Required</sup> <a name="timeLastAssessed" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeLastAssessed"></a>

```java
public java.lang.String getTimeLastAssessed();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeouts"></a>

```java
public DataSafeSecurityAssessmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference">DataSafeSecurityAssessmentTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `triggeredBy`<sup>Required</sup> <a name="triggeredBy" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.triggeredBy"></a>

```java
public java.lang.String getTriggeredBy();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAssessmentScheduledInput`<sup>Optional</sup> <a name="isAssessmentScheduledInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduledInput"></a>

```java
public java.lang.Object getIsAssessmentScheduledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAssessmentScheduled`<sup>Required</sup> <a name="isAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduled"></a>

```java
public java.lang.Object getIsAssessmentScheduled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSecurityAssessmentConfig <a name="DataSafeSecurityAssessmentConfig" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentConfig;

DataSafeSecurityAssessmentConfig.builder()
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
    .targetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAssessmentScheduled(java.lang.Boolean)
//  .isAssessmentScheduled(IResolvable)
//  .schedule(java.lang.String)
//  .timeouts(DataSafeSecurityAssessmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.isAssessmentScheduled">isAssessmentScheduled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAssessmentScheduled`<sup>Optional</sup> <a name="isAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.isAssessmentScheduled"></a>

```java
public java.lang.Object getIsAssessmentScheduled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.timeouts"></a>

```java
public DataSafeSecurityAssessmentTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#timeouts DataSafeSecurityAssessment#timeouts}

---

### DataSafeSecurityAssessmentStatistics <a name="DataSafeSecurityAssessmentStatistics" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatistics;

DataSafeSecurityAssessmentStatistics.builder()
    .build();
```


### DataSafeSecurityAssessmentStatisticsAdvisory <a name="DataSafeSecurityAssessmentStatisticsAdvisory" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsAdvisory;

DataSafeSecurityAssessmentStatisticsAdvisory.builder()
    .build();
```


### DataSafeSecurityAssessmentStatisticsDeferred <a name="DataSafeSecurityAssessmentStatisticsDeferred" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsDeferred;

DataSafeSecurityAssessmentStatisticsDeferred.builder()
    .build();
```


### DataSafeSecurityAssessmentStatisticsEvaluate <a name="DataSafeSecurityAssessmentStatisticsEvaluate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsEvaluate;

DataSafeSecurityAssessmentStatisticsEvaluate.builder()
    .build();
```


### DataSafeSecurityAssessmentStatisticsHighRisk <a name="DataSafeSecurityAssessmentStatisticsHighRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsHighRisk;

DataSafeSecurityAssessmentStatisticsHighRisk.builder()
    .build();
```


### DataSafeSecurityAssessmentStatisticsLowRisk <a name="DataSafeSecurityAssessmentStatisticsLowRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsLowRisk;

DataSafeSecurityAssessmentStatisticsLowRisk.builder()
    .build();
```


### DataSafeSecurityAssessmentStatisticsMediumRisk <a name="DataSafeSecurityAssessmentStatisticsMediumRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsMediumRisk;

DataSafeSecurityAssessmentStatisticsMediumRisk.builder()
    .build();
```


### DataSafeSecurityAssessmentStatisticsPass <a name="DataSafeSecurityAssessmentStatisticsPass" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsPass;

DataSafeSecurityAssessmentStatisticsPass.builder()
    .build();
```


### DataSafeSecurityAssessmentTimeouts <a name="DataSafeSecurityAssessmentTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentTimeouts;

DataSafeSecurityAssessmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#create DataSafeSecurityAssessment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#delete DataSafeSecurityAssessment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#update DataSafeSecurityAssessment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#create DataSafeSecurityAssessment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#delete DataSafeSecurityAssessment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#update DataSafeSecurityAssessment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSecurityAssessmentStatisticsAdvisoryList <a name="DataSafeSecurityAssessmentStatisticsAdvisoryList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsAdvisoryList;

new DataSafeSecurityAssessmentStatisticsAdvisoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.get"></a>

```java
public DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference <a name="DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference;

new DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount">targetsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory">DataSafeSecurityAssessmentStatisticsAdvisory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount"></a>

```java
public java.lang.Number getAuditingFindingsCount();
```

- *Type:* java.lang.Number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount"></a>

```java
public java.lang.Number getAuthorizationControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount"></a>

```java
public java.lang.Number getDataEncryptionFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount"></a>

```java
public java.lang.Number getDbConfigurationFindingsCount();
```

- *Type:* java.lang.Number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```java
public java.lang.Number getFineGrainedAccessControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount"></a>

```java
public java.lang.Number getPrivilegesAndRolesFindingsCount();
```

- *Type:* java.lang.Number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount"></a>

```java
public java.lang.Number getTargetsCount();
```

- *Type:* java.lang.Number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount"></a>

```java
public java.lang.Number getUserAccountsFindingsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue"></a>

```java
public DataSafeSecurityAssessmentStatisticsAdvisory getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory">DataSafeSecurityAssessmentStatisticsAdvisory</a>

---


### DataSafeSecurityAssessmentStatisticsDeferredList <a name="DataSafeSecurityAssessmentStatisticsDeferredList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsDeferredList;

new DataSafeSecurityAssessmentStatisticsDeferredList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.get"></a>

```java
public DataSafeSecurityAssessmentStatisticsDeferredOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSafeSecurityAssessmentStatisticsDeferredOutputReference <a name="DataSafeSecurityAssessmentStatisticsDeferredOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference;

new DataSafeSecurityAssessmentStatisticsDeferredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount">targetsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred">DataSafeSecurityAssessmentStatisticsDeferred</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount"></a>

```java
public java.lang.Number getAuditingFindingsCount();
```

- *Type:* java.lang.Number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount"></a>

```java
public java.lang.Number getAuthorizationControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount"></a>

```java
public java.lang.Number getDataEncryptionFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount"></a>

```java
public java.lang.Number getDbConfigurationFindingsCount();
```

- *Type:* java.lang.Number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```java
public java.lang.Number getFineGrainedAccessControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount"></a>

```java
public java.lang.Number getPrivilegesAndRolesFindingsCount();
```

- *Type:* java.lang.Number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount"></a>

```java
public java.lang.Number getTargetsCount();
```

- *Type:* java.lang.Number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount"></a>

```java
public java.lang.Number getUserAccountsFindingsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue"></a>

```java
public DataSafeSecurityAssessmentStatisticsDeferred getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred">DataSafeSecurityAssessmentStatisticsDeferred</a>

---


### DataSafeSecurityAssessmentStatisticsEvaluateList <a name="DataSafeSecurityAssessmentStatisticsEvaluateList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsEvaluateList;

new DataSafeSecurityAssessmentStatisticsEvaluateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.get"></a>

```java
public DataSafeSecurityAssessmentStatisticsEvaluateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSafeSecurityAssessmentStatisticsEvaluateOutputReference <a name="DataSafeSecurityAssessmentStatisticsEvaluateOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference;

new DataSafeSecurityAssessmentStatisticsEvaluateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount">targetsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate">DataSafeSecurityAssessmentStatisticsEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount"></a>

```java
public java.lang.Number getAuditingFindingsCount();
```

- *Type:* java.lang.Number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount"></a>

```java
public java.lang.Number getAuthorizationControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount"></a>

```java
public java.lang.Number getDataEncryptionFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount"></a>

```java
public java.lang.Number getDbConfigurationFindingsCount();
```

- *Type:* java.lang.Number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```java
public java.lang.Number getFineGrainedAccessControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount"></a>

```java
public java.lang.Number getPrivilegesAndRolesFindingsCount();
```

- *Type:* java.lang.Number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount"></a>

```java
public java.lang.Number getTargetsCount();
```

- *Type:* java.lang.Number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount"></a>

```java
public java.lang.Number getUserAccountsFindingsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue"></a>

```java
public DataSafeSecurityAssessmentStatisticsEvaluate getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate">DataSafeSecurityAssessmentStatisticsEvaluate</a>

---


### DataSafeSecurityAssessmentStatisticsHighRiskList <a name="DataSafeSecurityAssessmentStatisticsHighRiskList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsHighRiskList;

new DataSafeSecurityAssessmentStatisticsHighRiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.get"></a>

```java
public DataSafeSecurityAssessmentStatisticsHighRiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSafeSecurityAssessmentStatisticsHighRiskOutputReference <a name="DataSafeSecurityAssessmentStatisticsHighRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference;

new DataSafeSecurityAssessmentStatisticsHighRiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount">targetsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk">DataSafeSecurityAssessmentStatisticsHighRisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount"></a>

```java
public java.lang.Number getAuditingFindingsCount();
```

- *Type:* java.lang.Number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount"></a>

```java
public java.lang.Number getAuthorizationControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```java
public java.lang.Number getDataEncryptionFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```java
public java.lang.Number getDbConfigurationFindingsCount();
```

- *Type:* java.lang.Number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```java
public java.lang.Number getFineGrainedAccessControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```java
public java.lang.Number getPrivilegesAndRolesFindingsCount();
```

- *Type:* java.lang.Number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount"></a>

```java
public java.lang.Number getTargetsCount();
```

- *Type:* java.lang.Number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount"></a>

```java
public java.lang.Number getUserAccountsFindingsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue"></a>

```java
public DataSafeSecurityAssessmentStatisticsHighRisk getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk">DataSafeSecurityAssessmentStatisticsHighRisk</a>

---


### DataSafeSecurityAssessmentStatisticsList <a name="DataSafeSecurityAssessmentStatisticsList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsList;

new DataSafeSecurityAssessmentStatisticsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.get"></a>

```java
public DataSafeSecurityAssessmentStatisticsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSafeSecurityAssessmentStatisticsLowRiskList <a name="DataSafeSecurityAssessmentStatisticsLowRiskList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsLowRiskList;

new DataSafeSecurityAssessmentStatisticsLowRiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.get"></a>

```java
public DataSafeSecurityAssessmentStatisticsLowRiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSafeSecurityAssessmentStatisticsLowRiskOutputReference <a name="DataSafeSecurityAssessmentStatisticsLowRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference;

new DataSafeSecurityAssessmentStatisticsLowRiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount">targetsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk">DataSafeSecurityAssessmentStatisticsLowRisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount"></a>

```java
public java.lang.Number getAuditingFindingsCount();
```

- *Type:* java.lang.Number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount"></a>

```java
public java.lang.Number getAuthorizationControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```java
public java.lang.Number getDataEncryptionFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```java
public java.lang.Number getDbConfigurationFindingsCount();
```

- *Type:* java.lang.Number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```java
public java.lang.Number getFineGrainedAccessControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```java
public java.lang.Number getPrivilegesAndRolesFindingsCount();
```

- *Type:* java.lang.Number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount"></a>

```java
public java.lang.Number getTargetsCount();
```

- *Type:* java.lang.Number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount"></a>

```java
public java.lang.Number getUserAccountsFindingsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue"></a>

```java
public DataSafeSecurityAssessmentStatisticsLowRisk getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk">DataSafeSecurityAssessmentStatisticsLowRisk</a>

---


### DataSafeSecurityAssessmentStatisticsMediumRiskList <a name="DataSafeSecurityAssessmentStatisticsMediumRiskList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsMediumRiskList;

new DataSafeSecurityAssessmentStatisticsMediumRiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.get"></a>

```java
public DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference <a name="DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference;

new DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount">targetsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk">DataSafeSecurityAssessmentStatisticsMediumRisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount"></a>

```java
public java.lang.Number getAuditingFindingsCount();
```

- *Type:* java.lang.Number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount"></a>

```java
public java.lang.Number getAuthorizationControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```java
public java.lang.Number getDataEncryptionFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```java
public java.lang.Number getDbConfigurationFindingsCount();
```

- *Type:* java.lang.Number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```java
public java.lang.Number getFineGrainedAccessControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```java
public java.lang.Number getPrivilegesAndRolesFindingsCount();
```

- *Type:* java.lang.Number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount"></a>

```java
public java.lang.Number getTargetsCount();
```

- *Type:* java.lang.Number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount"></a>

```java
public java.lang.Number getUserAccountsFindingsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue"></a>

```java
public DataSafeSecurityAssessmentStatisticsMediumRisk getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk">DataSafeSecurityAssessmentStatisticsMediumRisk</a>

---


### DataSafeSecurityAssessmentStatisticsOutputReference <a name="DataSafeSecurityAssessmentStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsOutputReference;

new DataSafeSecurityAssessmentStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.advisory">advisory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList">DataSafeSecurityAssessmentStatisticsAdvisoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.deferred">deferred</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList">DataSafeSecurityAssessmentStatisticsDeferredList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList">DataSafeSecurityAssessmentStatisticsEvaluateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk">highRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList">DataSafeSecurityAssessmentStatisticsHighRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk">lowRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList">DataSafeSecurityAssessmentStatisticsLowRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk">mediumRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList">DataSafeSecurityAssessmentStatisticsMediumRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.pass">pass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList">DataSafeSecurityAssessmentStatisticsPassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount">targetsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics">DataSafeSecurityAssessmentStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advisory`<sup>Required</sup> <a name="advisory" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.advisory"></a>

```java
public DataSafeSecurityAssessmentStatisticsAdvisoryList getAdvisory();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList">DataSafeSecurityAssessmentStatisticsAdvisoryList</a>

---

##### `deferred`<sup>Required</sup> <a name="deferred" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.deferred"></a>

```java
public DataSafeSecurityAssessmentStatisticsDeferredList getDeferred();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList">DataSafeSecurityAssessmentStatisticsDeferredList</a>

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate"></a>

```java
public DataSafeSecurityAssessmentStatisticsEvaluateList getEvaluate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList">DataSafeSecurityAssessmentStatisticsEvaluateList</a>

---

##### `highRisk`<sup>Required</sup> <a name="highRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk"></a>

```java
public DataSafeSecurityAssessmentStatisticsHighRiskList getHighRisk();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList">DataSafeSecurityAssessmentStatisticsHighRiskList</a>

---

##### `lowRisk`<sup>Required</sup> <a name="lowRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk"></a>

```java
public DataSafeSecurityAssessmentStatisticsLowRiskList getLowRisk();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList">DataSafeSecurityAssessmentStatisticsLowRiskList</a>

---

##### `mediumRisk`<sup>Required</sup> <a name="mediumRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk"></a>

```java
public DataSafeSecurityAssessmentStatisticsMediumRiskList getMediumRisk();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList">DataSafeSecurityAssessmentStatisticsMediumRiskList</a>

---

##### `pass`<sup>Required</sup> <a name="pass" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.pass"></a>

```java
public DataSafeSecurityAssessmentStatisticsPassList getPass();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList">DataSafeSecurityAssessmentStatisticsPassList</a>

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount"></a>

```java
public java.lang.Number getTargetsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue"></a>

```java
public DataSafeSecurityAssessmentStatistics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics">DataSafeSecurityAssessmentStatistics</a>

---


### DataSafeSecurityAssessmentStatisticsPassList <a name="DataSafeSecurityAssessmentStatisticsPassList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsPassList;

new DataSafeSecurityAssessmentStatisticsPassList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.get"></a>

```java
public DataSafeSecurityAssessmentStatisticsPassOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSafeSecurityAssessmentStatisticsPassOutputReference <a name="DataSafeSecurityAssessmentStatisticsPassOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentStatisticsPassOutputReference;

new DataSafeSecurityAssessmentStatisticsPassOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount">targetsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass">DataSafeSecurityAssessmentStatisticsPass</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount"></a>

```java
public java.lang.Number getAuditingFindingsCount();
```

- *Type:* java.lang.Number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount"></a>

```java
public java.lang.Number getAuthorizationControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount"></a>

```java
public java.lang.Number getDataEncryptionFindingsCount();
```

- *Type:* java.lang.Number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount"></a>

```java
public java.lang.Number getDbConfigurationFindingsCount();
```

- *Type:* java.lang.Number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```java
public java.lang.Number getFineGrainedAccessControlFindingsCount();
```

- *Type:* java.lang.Number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount"></a>

```java
public java.lang.Number getPrivilegesAndRolesFindingsCount();
```

- *Type:* java.lang.Number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount"></a>

```java
public java.lang.Number getTargetsCount();
```

- *Type:* java.lang.Number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount"></a>

```java
public java.lang.Number getUserAccountsFindingsCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue"></a>

```java
public DataSafeSecurityAssessmentStatisticsPass getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass">DataSafeSecurityAssessmentStatisticsPass</a>

---


### DataSafeSecurityAssessmentTimeoutsOutputReference <a name="DataSafeSecurityAssessmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_security_assessment.DataSafeSecurityAssessmentTimeoutsOutputReference;

new DataSafeSecurityAssessmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>

---



