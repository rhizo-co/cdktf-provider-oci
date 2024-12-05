# `dataSafeSetSecurityAssessmentBaseline` Submodule <a name="`dataSafeSetSecurityAssessmentBaseline` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSetSecurityAssessmentBaseline <a name="DataSafeSetSecurityAssessmentBaseline" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline oci_data_safe_set_security_assessment_baseline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_set_security_assessment_baseline.DataSafeSetSecurityAssessmentBaseline;

DataSafeSetSecurityAssessmentBaseline.Builder.create(Construct scope, java.lang.String id)
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
    .securityAssessmentId(java.lang.String)
//  .assessmentIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DataSafeSetSecurityAssessmentBaselineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.securityAssessmentId">securityAssessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#security_assessment_id DataSafeSetSecurityAssessmentBaseline#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.assessmentIds">assessmentIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#assessment_ids DataSafeSetSecurityAssessmentBaseline#assessment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#id DataSafeSetSecurityAssessmentBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts">DataSafeSetSecurityAssessmentBaselineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.securityAssessmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#security_assessment_id DataSafeSetSecurityAssessmentBaseline#security_assessment_id}.

---

##### `assessmentIds`<sup>Optional</sup> <a name="assessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.assessmentIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#assessment_ids DataSafeSetSecurityAssessmentBaseline#assessment_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#id DataSafeSetSecurityAssessmentBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts">DataSafeSetSecurityAssessmentBaselineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#timeouts DataSafeSetSecurityAssessmentBaseline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.resetAssessmentIds">resetAssessmentIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.putTimeouts"></a>

```java
public void putTimeouts(DataSafeSetSecurityAssessmentBaselineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts">DataSafeSetSecurityAssessmentBaselineTimeouts</a>

---

##### `resetAssessmentIds` <a name="resetAssessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.resetAssessmentIds"></a>

```java
public void resetAssessmentIds()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSetSecurityAssessmentBaseline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_set_security_assessment_baseline.DataSafeSetSecurityAssessmentBaseline;

DataSafeSetSecurityAssessmentBaseline.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_set_security_assessment_baseline.DataSafeSetSecurityAssessmentBaseline;

DataSafeSetSecurityAssessmentBaseline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_set_security_assessment_baseline.DataSafeSetSecurityAssessmentBaseline;

DataSafeSetSecurityAssessmentBaseline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_set_security_assessment_baseline.DataSafeSetSecurityAssessmentBaseline;

DataSafeSetSecurityAssessmentBaseline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeSetSecurityAssessmentBaseline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeSetSecurityAssessmentBaseline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeSetSecurityAssessmentBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeSetSecurityAssessmentBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSetSecurityAssessmentBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference">DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.assessmentIdsInput">assessmentIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.securityAssessmentIdInput">securityAssessmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts">DataSafeSetSecurityAssessmentBaselineTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.assessmentIds">assessmentIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.securityAssessmentId">securityAssessmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.timeouts"></a>

```java
public DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference">DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference</a>

---

##### `assessmentIdsInput`<sup>Optional</sup> <a name="assessmentIdsInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.assessmentIdsInput"></a>

```java
public java.util.List<java.lang.String> getAssessmentIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `securityAssessmentIdInput`<sup>Optional</sup> <a name="securityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.securityAssessmentIdInput"></a>

```java
public java.lang.String getSecurityAssessmentIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts">DataSafeSetSecurityAssessmentBaselineTimeouts</a>

---

##### `assessmentIds`<sup>Required</sup> <a name="assessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.assessmentIds"></a>

```java
public java.util.List<java.lang.String> getAssessmentIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.securityAssessmentId"></a>

```java
public java.lang.String getSecurityAssessmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaseline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSetSecurityAssessmentBaselineConfig <a name="DataSafeSetSecurityAssessmentBaselineConfig" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_set_security_assessment_baseline.DataSafeSetSecurityAssessmentBaselineConfig;

DataSafeSetSecurityAssessmentBaselineConfig.builder()
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
    .securityAssessmentId(java.lang.String)
//  .assessmentIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DataSafeSetSecurityAssessmentBaselineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.securityAssessmentId">securityAssessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#security_assessment_id DataSafeSetSecurityAssessmentBaseline#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.assessmentIds">assessmentIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#assessment_ids DataSafeSetSecurityAssessmentBaseline#assessment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#id DataSafeSetSecurityAssessmentBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts">DataSafeSetSecurityAssessmentBaselineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.securityAssessmentId"></a>

```java
public java.lang.String getSecurityAssessmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#security_assessment_id DataSafeSetSecurityAssessmentBaseline#security_assessment_id}.

---

##### `assessmentIds`<sup>Optional</sup> <a name="assessmentIds" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.assessmentIds"></a>

```java
public java.util.List<java.lang.String> getAssessmentIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#assessment_ids DataSafeSetSecurityAssessmentBaseline#assessment_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#id DataSafeSetSecurityAssessmentBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineConfig.property.timeouts"></a>

```java
public DataSafeSetSecurityAssessmentBaselineTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts">DataSafeSetSecurityAssessmentBaselineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#timeouts DataSafeSetSecurityAssessmentBaseline#timeouts}

---

### DataSafeSetSecurityAssessmentBaselineTimeouts <a name="DataSafeSetSecurityAssessmentBaselineTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_set_security_assessment_baseline.DataSafeSetSecurityAssessmentBaselineTimeouts;

DataSafeSetSecurityAssessmentBaselineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#create DataSafeSetSecurityAssessmentBaseline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#delete DataSafeSetSecurityAssessmentBaseline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#update DataSafeSetSecurityAssessmentBaseline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#create DataSafeSetSecurityAssessmentBaseline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#delete DataSafeSetSecurityAssessmentBaseline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline#update DataSafeSetSecurityAssessmentBaseline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference <a name="DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_set_security_assessment_baseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference;

new DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts">DataSafeSetSecurityAssessmentBaselineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaseline.DataSafeSetSecurityAssessmentBaselineTimeouts">DataSafeSetSecurityAssessmentBaselineTimeouts</a>

---



