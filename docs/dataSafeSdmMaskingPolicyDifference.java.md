# `dataSafeSdmMaskingPolicyDifference` Submodule <a name="`dataSafeSdmMaskingPolicyDifference` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSdmMaskingPolicyDifference <a name="DataSafeSdmMaskingPolicyDifference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference oci_data_safe_sdm_masking_policy_difference}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sdm_masking_policy_difference.DataSafeSdmMaskingPolicyDifference;

DataSafeSdmMaskingPolicyDifference.Builder.create(Construct scope, java.lang.String id)
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
    .maskingPolicyId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .differenceType(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DataSafeSdmMaskingPolicyDifferenceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.differenceType">differenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}.

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.maskingPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}.

---

##### `differenceType`<sup>Optional</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.differenceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#timeouts DataSafeSdmMaskingPolicyDifference#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType">resetDifferenceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts"></a>

```java
public void putTimeouts(DataSafeSdmMaskingPolicyDifferenceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDifferenceType` <a name="resetDifferenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType"></a>

```java
public void resetDifferenceType()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sdm_masking_policy_difference.DataSafeSdmMaskingPolicyDifference;

DataSafeSdmMaskingPolicyDifference.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sdm_masking_policy_difference.DataSafeSdmMaskingPolicyDifference;

DataSafeSdmMaskingPolicyDifference.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sdm_masking_policy_difference.DataSafeSdmMaskingPolicyDifference;

DataSafeSdmMaskingPolicyDifference.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sdm_masking_policy_difference.DataSafeSdmMaskingPolicyDifference;

DataSafeSdmMaskingPolicyDifference.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeSdmMaskingPolicyDifference.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeSdmMaskingPolicyDifference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeSdmMaskingPolicyDifference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSdmMaskingPolicyDifference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted">timeCreationStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput">differenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput">maskingPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType">differenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId"></a>

```java
public java.lang.String getSensitiveDataModelId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeCreationStarted`<sup>Required</sup> <a name="timeCreationStarted" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted"></a>

```java
public java.lang.String getTimeCreationStarted();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts"></a>

```java
public DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `differenceTypeInput`<sup>Optional</sup> <a name="differenceTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput"></a>

```java
public java.lang.String getDifferenceTypeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maskingPolicyIdInput`<sup>Optional</sup> <a name="maskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput"></a>

```java
public java.lang.String getMaskingPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `differenceType`<sup>Required</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType"></a>

```java
public java.lang.String getDifferenceType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId"></a>

```java
public java.lang.String getMaskingPolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSdmMaskingPolicyDifferenceConfig <a name="DataSafeSdmMaskingPolicyDifferenceConfig" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sdm_masking_policy_difference.DataSafeSdmMaskingPolicyDifferenceConfig;

DataSafeSdmMaskingPolicyDifferenceConfig.builder()
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
    .maskingPolicyId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .differenceType(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DataSafeSdmMaskingPolicyDifferenceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType">differenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}.

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId"></a>

```java
public java.lang.String getMaskingPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}.

---

##### `differenceType`<sup>Optional</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType"></a>

```java
public java.lang.String getDifferenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts"></a>

```java
public DataSafeSdmMaskingPolicyDifferenceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#timeouts DataSafeSdmMaskingPolicyDifference#timeouts}

---

### DataSafeSdmMaskingPolicyDifferenceTimeouts <a name="DataSafeSdmMaskingPolicyDifferenceTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sdm_masking_policy_difference.DataSafeSdmMaskingPolicyDifferenceTimeouts;

DataSafeSdmMaskingPolicyDifferenceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference <a name="DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sdm_masking_policy_difference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference;

new DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

---



