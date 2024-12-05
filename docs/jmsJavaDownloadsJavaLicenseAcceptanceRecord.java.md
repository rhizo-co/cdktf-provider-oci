# `jmsJavaDownloadsJavaLicenseAcceptanceRecord` Submodule <a name="`jmsJavaDownloadsJavaLicenseAcceptanceRecord` Submodule" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JmsJavaDownloadsJavaLicenseAcceptanceRecord <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecord" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record oci_jms_java_downloads_java_license_acceptance_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecord;

JmsJavaDownloadsJavaLicenseAcceptanceRecord.Builder.create(Construct scope, java.lang.String id)
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
    .licenseAcceptanceStatus(java.lang.String)
    .licenseType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.licenseAcceptanceStatus">licenseAcceptanceStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}.

---

##### `licenseAcceptanceStatus`<sup>Required</sup> <a name="licenseAcceptanceStatus" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.licenseAcceptanceStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}.

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#timeouts JmsJavaDownloadsJavaLicenseAcceptanceRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts"></a>

```java
public void putTimeouts(JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a JmsJavaDownloadsJavaLicenseAcceptanceRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecord;

JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecord;

JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecord;

JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecord;

JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a JmsJavaDownloadsJavaLicenseAcceptanceRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the JmsJavaDownloadsJavaLicenseAcceptanceRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing JmsJavaDownloadsJavaLicenseAcceptanceRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the JmsJavaDownloadsJavaLicenseAcceptanceRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.createdBy">createdBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeAccepted">timeAccepted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeLastUpdated">timeLastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatusInput">licenseAcceptanceStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatus">licenseAcceptanceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.createdBy"></a>

```java
public JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList getCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.lastUpdatedBy"></a>

```java
public JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList getLastUpdatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeAccepted"></a>

```java
public java.lang.String getTimeAccepted();
```

- *Type:* java.lang.String

---

##### `timeLastUpdated`<sup>Required</sup> <a name="timeLastUpdated" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeLastUpdated"></a>

```java
public java.lang.String getTimeLastUpdated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeouts"></a>

```java
public JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseAcceptanceStatusInput`<sup>Optional</sup> <a name="licenseAcceptanceStatusInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatusInput"></a>

```java
public java.lang.String getLicenseAcceptanceStatusInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseAcceptanceStatus`<sup>Required</sup> <a name="licenseAcceptanceStatus" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseAcceptanceStatus"></a>

```java
public java.lang.String getLicenseAcceptanceStatus();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig;

JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.builder()
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
    .licenseAcceptanceStatus(java.lang.String)
    .licenseType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseAcceptanceStatus">licenseAcceptanceStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#compartment_id JmsJavaDownloadsJavaLicenseAcceptanceRecord#compartment_id}.

---

##### `licenseAcceptanceStatus`<sup>Required</sup> <a name="licenseAcceptanceStatus" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseAcceptanceStatus"></a>

```java
public java.lang.String getLicenseAcceptanceStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_acceptance_status JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_acceptance_status}.

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#license_type JmsJavaDownloadsJavaLicenseAcceptanceRecord#license_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#defined_tags JmsJavaDownloadsJavaLicenseAcceptanceRecord#defined_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#id JmsJavaDownloadsJavaLicenseAcceptanceRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordConfig.property.timeouts"></a>

```java
public JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#timeouts JmsJavaDownloadsJavaLicenseAcceptanceRecord#timeouts}

---

### JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy;

JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy.builder()
    .build();
```


### JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy;

JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy.builder()
    .build();
```


### JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts;

JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#create JmsJavaDownloadsJavaLicenseAcceptanceRecord#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#delete JmsJavaDownloadsJavaLicenseAcceptanceRecord#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#update JmsJavaDownloadsJavaLicenseAcceptanceRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#create JmsJavaDownloadsJavaLicenseAcceptanceRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#delete JmsJavaDownloadsJavaLicenseAcceptanceRecord#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/jms_java_downloads_java_license_acceptance_record#update JmsJavaDownloadsJavaLicenseAcceptanceRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList;

new JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.get"></a>

```java
public JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference;

new JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference.property.internalValue"></a>

```java
public JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy</a>

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList;

new JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.get"></a>

```java
public JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference;

new JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference.property.internalValue"></a>

```java
public JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy">JmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy</a>

---


### JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference <a name="JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.jms_java_downloads_java_license_acceptance_record.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference;

new JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.jmsJavaDownloadsJavaLicenseAcceptanceRecord.JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts">JmsJavaDownloadsJavaLicenseAcceptanceRecordTimeouts</a>

---



