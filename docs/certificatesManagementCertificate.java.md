# `certificatesManagementCertificate` Submodule <a name="`certificatesManagementCertificate` Submodule" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatesManagementCertificate <a name="CertificatesManagementCertificate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate oci_certificates_management_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificate;

CertificatesManagementCertificate.Builder.create(Construct scope, java.lang.String id)
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
    .certificateConfig(CertificatesManagementCertificateCertificateConfig)
    .compartmentId(java.lang.String)
    .name(java.lang.String)
//  .certificateRules(IResolvable)
//  .certificateRules(java.util.List<CertificatesManagementCertificateCertificateRules>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CertificatesManagementCertificateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.certificateConfig">certificateConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | certificate_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.certificateRules">certificateRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>></code> | certificate_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateConfig`<sup>Required</sup> <a name="certificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.certificateConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

certificate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_config CertificatesManagementCertificate#certificate_config}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}.

---

##### `certificateRules`<sup>Optional</sup> <a name="certificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.certificateRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>>

certificate_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_rules CertificatesManagementCertificate#certificate_rules}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#timeouts CertificatesManagementCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig">putCertificateConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules">putCertificateRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetCertificateRules">resetCertificateRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificateConfig` <a name="putCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig"></a>

```java
public void putCertificateConfig(CertificatesManagementCertificateCertificateConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---

##### `putCertificateRules` <a name="putCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules"></a>

```java
public void putCertificateRules(IResolvable OR java.util.List<CertificatesManagementCertificateCertificateRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putCertificateRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts"></a>

```java
public void putTimeouts(CertificatesManagementCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

---

##### `resetCertificateRules` <a name="resetCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetCertificateRules"></a>

```java
public void resetCertificateRules()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertificatesManagementCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificate;

CertificatesManagementCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificate;

CertificatesManagementCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificate;

CertificatesManagementCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificate;

CertificatesManagementCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CertificatesManagementCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CertificatesManagementCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CertificatesManagementCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CertificatesManagementCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CertificatesManagementCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfig">certificateConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference">CertificatesManagementCertificateCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateProfileType">certificateProfileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRevocationListDetails">certificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList">CertificatesManagementCertificateCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRules">certificateRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList">CertificatesManagementCertificateCertificateRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.currentVersion">currentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList">CertificatesManagementCertificateCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList">CertificatesManagementCertificateSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeOfDeletion">timeOfDeletion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference">CertificatesManagementCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfigInput">certificateConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRulesInput">certificateRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateConfig`<sup>Required</sup> <a name="certificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfig"></a>

```java
public CertificatesManagementCertificateCertificateConfigOutputReference getCertificateConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference">CertificatesManagementCertificateCertificateConfigOutputReference</a>

---

##### `certificateProfileType`<sup>Required</sup> <a name="certificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateProfileType"></a>

```java
public java.lang.String getCertificateProfileType();
```

- *Type:* java.lang.String

---

##### `certificateRevocationListDetails`<sup>Required</sup> <a name="certificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRevocationListDetails"></a>

```java
public CertificatesManagementCertificateCertificateRevocationListDetailsList getCertificateRevocationListDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList">CertificatesManagementCertificateCertificateRevocationListDetailsList</a>

---

##### `certificateRules`<sup>Required</sup> <a name="certificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRules"></a>

```java
public CertificatesManagementCertificateCertificateRulesList getCertificateRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList">CertificatesManagementCertificateCertificateRulesList</a>

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.currentVersion"></a>

```java
public CertificatesManagementCertificateCurrentVersionList getCurrentVersion();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList">CertificatesManagementCertificateCurrentVersionList</a>

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.issuerCertificateAuthorityId"></a>

```java
public java.lang.String getIssuerCertificateAuthorityId();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.subject"></a>

```java
public CertificatesManagementCertificateSubjectList getSubject();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList">CertificatesManagementCertificateSubjectList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeOfDeletion"></a>

```java
public java.lang.String getTimeOfDeletion();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeouts"></a>

```java
public CertificatesManagementCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference">CertificatesManagementCertificateTimeoutsOutputReference</a>

---

##### `certificateConfigInput`<sup>Optional</sup> <a name="certificateConfigInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateConfigInput"></a>

```java
public CertificatesManagementCertificateCertificateConfig getCertificateConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---

##### `certificateRulesInput`<sup>Optional</sup> <a name="certificateRulesInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.certificateRulesInput"></a>

```java
public java.lang.Object getCertificateRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatesManagementCertificateCertificateConfig <a name="CertificatesManagementCertificateCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateConfig;

CertificatesManagementCertificateCertificateConfig.builder()
    .configType(java.lang.String)
//  .certificateProfileType(java.lang.String)
//  .csrPem(java.lang.String)
//  .issuerCertificateAuthorityId(java.lang.String)
//  .keyAlgorithm(java.lang.String)
//  .signatureAlgorithm(java.lang.String)
//  .subject(CertificatesManagementCertificateCertificateConfigSubject)
//  .subjectAlternativeNames(IResolvable)
//  .subjectAlternativeNames(java.util.List<CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames>)
//  .validity(CertificatesManagementCertificateCertificateConfigValidity)
//  .versionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.configType">configType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.certificateProfileType">certificateProfileType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.csrPem">csrPem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | subject block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>></code> | subject_alternative_names block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | validity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.versionName">versionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}. |

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#config_type CertificatesManagementCertificate#config_type}.

---

##### `certificateProfileType`<sup>Optional</sup> <a name="certificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.certificateProfileType"></a>

```java
public java.lang.String getCertificateProfileType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_profile_type CertificatesManagementCertificate#certificate_profile_type}.

---

##### `csrPem`<sup>Optional</sup> <a name="csrPem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.csrPem"></a>

```java
public java.lang.String getCsrPem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#csr_pem CertificatesManagementCertificate#csr_pem}.

---

##### `issuerCertificateAuthorityId`<sup>Optional</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.issuerCertificateAuthorityId"></a>

```java
public java.lang.String getIssuerCertificateAuthorityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#issuer_certificate_authority_id CertificatesManagementCertificate#issuer_certificate_authority_id}.

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#key_algorithm CertificatesManagementCertificate#key_algorithm}.

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#signature_algorithm CertificatesManagementCertificate#signature_algorithm}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subject"></a>

```java
public CertificatesManagementCertificateCertificateConfigSubject getSubject();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject CertificatesManagementCertificate#subject}

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.subjectAlternativeNames"></a>

```java
public java.lang.Object getSubjectAlternativeNames();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#subject_alternative_names CertificatesManagementCertificate#subject_alternative_names}

---

##### `validity`<sup>Optional</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.validity"></a>

```java
public CertificatesManagementCertificateCertificateConfigValidity getValidity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#validity CertificatesManagementCertificate#validity}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#version_name CertificatesManagementCertificate#version_name}.

---

### CertificatesManagementCertificateCertificateConfigSubject <a name="CertificatesManagementCertificateCertificateConfigSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateConfigSubject;

CertificatesManagementCertificateCertificateConfigSubject.builder()
    .commonName(java.lang.String)
//  .country(java.lang.String)
//  .distinguishedNameQualifier(java.lang.String)
//  .domainComponent(java.lang.String)
//  .generationQualifier(java.lang.String)
//  .givenName(java.lang.String)
//  .initials(java.lang.String)
//  .localityName(java.lang.String)
//  .organization(java.lang.String)
//  .organizationalUnit(java.lang.String)
//  .pseudonym(java.lang.String)
//  .serialNumber(java.lang.String)
//  .stateOrProvinceName(java.lang.String)
//  .street(java.lang.String)
//  .surname(java.lang.String)
//  .title(java.lang.String)
//  .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.domainComponent">domainComponent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.givenName">givenName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.initials">initials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.localityName">localityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.street">street</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.surname">surname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}. |

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#common_name CertificatesManagementCertificate#common_name}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#country CertificatesManagementCertificate#country}.

---

##### `distinguishedNameQualifier`<sup>Optional</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#distinguished_name_qualifier CertificatesManagementCertificate#distinguished_name_qualifier}.

---

##### `domainComponent`<sup>Optional</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.domainComponent"></a>

```java
public java.lang.String getDomainComponent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#domain_component CertificatesManagementCertificate#domain_component}.

---

##### `generationQualifier`<sup>Optional</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#generation_qualifier CertificatesManagementCertificate#generation_qualifier}.

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#given_name CertificatesManagementCertificate#given_name}.

---

##### `initials`<sup>Optional</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#initials CertificatesManagementCertificate#initials}.

---

##### `localityName`<sup>Optional</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.localityName"></a>

```java
public java.lang.String getLocalityName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#locality_name CertificatesManagementCertificate#locality_name}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organization CertificatesManagementCertificate#organization}.

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#organizational_unit CertificatesManagementCertificate#organizational_unit}.

---

##### `pseudonym`<sup>Optional</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#pseudonym CertificatesManagementCertificate#pseudonym}.

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#serial_number CertificatesManagementCertificate#serial_number}.

---

##### `stateOrProvinceName`<sup>Optional</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.stateOrProvinceName"></a>

```java
public java.lang.String getStateOrProvinceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#state_or_province_name CertificatesManagementCertificate#state_or_province_name}.

---

##### `street`<sup>Optional</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.street"></a>

```java
public java.lang.String getStreet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#street CertificatesManagementCertificate#street}.

---

##### `surname`<sup>Optional</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#surname CertificatesManagementCertificate#surname}.

---

##### `title`<sup>Optional</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#title CertificatesManagementCertificate#title}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#user_id CertificatesManagementCertificate#user_id}.

---

### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames;

CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.builder()
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#type CertificatesManagementCertificate#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#value CertificatesManagementCertificate#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#type CertificatesManagementCertificate#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#value CertificatesManagementCertificate#value}.

---

### CertificatesManagementCertificateCertificateConfigValidity <a name="CertificatesManagementCertificateCertificateConfigValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateConfigValidity;

CertificatesManagementCertificateCertificateConfigValidity.builder()
    .timeOfValidityNotAfter(java.lang.String)
//  .timeOfValidityNotBefore(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}. |

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotAfter"></a>

```java
public java.lang.String getTimeOfValidityNotAfter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_after CertificatesManagementCertificate#time_of_validity_not_after}.

---

##### `timeOfValidityNotBefore`<sup>Optional</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity.property.timeOfValidityNotBefore"></a>

```java
public java.lang.String getTimeOfValidityNotBefore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#time_of_validity_not_before CertificatesManagementCertificate#time_of_validity_not_before}.

---

### CertificatesManagementCertificateCertificateRevocationListDetails <a name="CertificatesManagementCertificateCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateRevocationListDetails;

CertificatesManagementCertificateCertificateRevocationListDetails.builder()
    .build();
```


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig;

CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig.builder()
    .build();
```


### CertificatesManagementCertificateCertificateRules <a name="CertificatesManagementCertificateCertificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateRules;

CertificatesManagementCertificateCertificateRules.builder()
    .advanceRenewalPeriod(java.lang.String)
    .renewalInterval(java.lang.String)
    .ruleType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.advanceRenewalPeriod">advanceRenewalPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#advance_renewal_period CertificatesManagementCertificate#advance_renewal_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.renewalInterval">renewalInterval</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#renewal_interval CertificatesManagementCertificate#renewal_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#rule_type CertificatesManagementCertificate#rule_type}. |

---

##### `advanceRenewalPeriod`<sup>Required</sup> <a name="advanceRenewalPeriod" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.advanceRenewalPeriod"></a>

```java
public java.lang.String getAdvanceRenewalPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#advance_renewal_period CertificatesManagementCertificate#advance_renewal_period}.

---

##### `renewalInterval`<sup>Required</sup> <a name="renewalInterval" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.renewalInterval"></a>

```java
public java.lang.String getRenewalInterval();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#renewal_interval CertificatesManagementCertificate#renewal_interval}.

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#rule_type CertificatesManagementCertificate#rule_type}.

---

### CertificatesManagementCertificateConfig <a name="CertificatesManagementCertificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateConfig;

CertificatesManagementCertificateConfig.builder()
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
    .certificateConfig(CertificatesManagementCertificateCertificateConfig)
    .compartmentId(java.lang.String)
    .name(java.lang.String)
//  .certificateRules(IResolvable)
//  .certificateRules(java.util.List<CertificatesManagementCertificateCertificateRules>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CertificatesManagementCertificateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateConfig">certificateConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | certificate_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateRules">certificateRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>></code> | certificate_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateConfig`<sup>Required</sup> <a name="certificateConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateConfig"></a>

```java
public CertificatesManagementCertificateCertificateConfig getCertificateConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

certificate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_config CertificatesManagementCertificate#certificate_config}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#compartment_id CertificatesManagementCertificate#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#name CertificatesManagementCertificate#name}.

---

##### `certificateRules`<sup>Optional</sup> <a name="certificateRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.certificateRules"></a>

```java
public java.lang.Object getCertificateRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>>

certificate_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#certificate_rules CertificatesManagementCertificate#certificate_rules}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#defined_tags CertificatesManagementCertificate#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#description CertificatesManagementCertificate#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#freeform_tags CertificatesManagementCertificate#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#id CertificatesManagementCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateConfig.property.timeouts"></a>

```java
public CertificatesManagementCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#timeouts CertificatesManagementCertificate#timeouts}

---

### CertificatesManagementCertificateCurrentVersion <a name="CertificatesManagementCertificateCurrentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersion;

CertificatesManagementCertificateCurrentVersion.builder()
    .build();
```


### CertificatesManagementCertificateCurrentVersionRevocationStatus <a name="CertificatesManagementCertificateCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionRevocationStatus;

CertificatesManagementCertificateCurrentVersionRevocationStatus.builder()
    .build();
```


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames;

CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames.builder()
    .build();
```


### CertificatesManagementCertificateCurrentVersionValidity <a name="CertificatesManagementCertificateCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionValidity;

CertificatesManagementCertificateCurrentVersionValidity.builder()
    .build();
```


### CertificatesManagementCertificateSubject <a name="CertificatesManagementCertificateSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateSubject;

CertificatesManagementCertificateSubject.builder()
    .build();
```


### CertificatesManagementCertificateTimeouts <a name="CertificatesManagementCertificateTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateTimeouts;

CertificatesManagementCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#create CertificatesManagementCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#delete CertificatesManagementCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate#update CertificatesManagementCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatesManagementCertificateCertificateConfigOutputReference <a name="CertificatesManagementCertificateCertificateConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateConfigOutputReference;

new CertificatesManagementCertificateCertificateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames">putSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity">putValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCertificateProfileType">resetCertificateProfileType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCsrPem">resetCsrPem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetIssuerCertificateAuthorityId">resetIssuerCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetValidity">resetValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetVersionName">resetVersionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubject` <a name="putSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject"></a>

```java
public void putSubject(CertificatesManagementCertificateCertificateConfigSubject value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---

##### `putSubjectAlternativeNames` <a name="putSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames"></a>

```java
public void putSubjectAlternativeNames(IResolvable OR java.util.List<CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>>

---

##### `putValidity` <a name="putValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity"></a>

```java
public void putValidity(CertificatesManagementCertificateCertificateConfigValidity value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.putValidity.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---

##### `resetCertificateProfileType` <a name="resetCertificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCertificateProfileType"></a>

```java
public void resetCertificateProfileType()
```

##### `resetCsrPem` <a name="resetCsrPem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetCsrPem"></a>

```java
public void resetCsrPem()
```

##### `resetIssuerCertificateAuthorityId` <a name="resetIssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetIssuerCertificateAuthorityId"></a>

```java
public void resetIssuerCertificateAuthorityId()
```

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetKeyAlgorithm"></a>

```java
public void resetKeyAlgorithm()
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSignatureAlgorithm"></a>

```java
public void resetSignatureAlgorithm()
```

##### `resetSubject` <a name="resetSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubject"></a>

```java
public void resetSubject()
```

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetSubjectAlternativeNames"></a>

```java
public void resetSubjectAlternativeNames()
```

##### `resetValidity` <a name="resetValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetValidity"></a>

```java
public void resetValidity()
```

##### `resetVersionName` <a name="resetVersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.resetVersionName"></a>

```java
public void resetVersionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference">CertificatesManagementCertificateCertificateConfigSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference">CertificatesManagementCertificateCertificateConfigValidityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileTypeInput">certificateProfileTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configTypeInput">configTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPemInput">csrPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityIdInput">issuerCertificateAuthorityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectInput">subjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validityInput">validityInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionNameInput">versionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType">certificateProfileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem">csrPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subject"></a>

```java
public CertificatesManagementCertificateCertificateConfigSubjectOutputReference getSubject();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference">CertificatesManagementCertificateCertificateConfigSubjectOutputReference</a>

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames"></a>

```java
public CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList getSubjectAlternativeNames();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validity"></a>

```java
public CertificatesManagementCertificateCertificateConfigValidityOutputReference getValidity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference">CertificatesManagementCertificateCertificateConfigValidityOutputReference</a>

---

##### `certificateProfileTypeInput`<sup>Optional</sup> <a name="certificateProfileTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileTypeInput"></a>

```java
public java.lang.String getCertificateProfileTypeInput();
```

- *Type:* java.lang.String

---

##### `configTypeInput`<sup>Optional</sup> <a name="configTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configTypeInput"></a>

```java
public java.lang.String getConfigTypeInput();
```

- *Type:* java.lang.String

---

##### `csrPemInput`<sup>Optional</sup> <a name="csrPemInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPemInput"></a>

```java
public java.lang.String getCsrPemInput();
```

- *Type:* java.lang.String

---

##### `issuerCertificateAuthorityIdInput`<sup>Optional</sup> <a name="issuerCertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityIdInput"></a>

```java
public java.lang.String getIssuerCertificateAuthorityIdInput();
```

- *Type:* java.lang.String

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithmInput"></a>

```java
public java.lang.String getKeyAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithmInput"></a>

```java
public java.lang.String getSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNamesInput"></a>

```java
public java.lang.Object getSubjectAlternativeNamesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>>

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.subjectInput"></a>

```java
public CertificatesManagementCertificateCertificateConfigSubject getSubjectInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---

##### `validityInput`<sup>Optional</sup> <a name="validityInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.validityInput"></a>

```java
public CertificatesManagementCertificateCertificateConfigValidity getValidityInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionNameInput"></a>

```java
public java.lang.String getVersionNameInput();
```

- *Type:* java.lang.String

---

##### `certificateProfileType`<sup>Required</sup> <a name="certificateProfileType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType"></a>

```java
public java.lang.String getCertificateProfileType();
```

- *Type:* java.lang.String

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `csrPem`<sup>Required</sup> <a name="csrPem" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem"></a>

```java
public java.lang.String getCsrPem();
```

- *Type:* java.lang.String

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```java
public java.lang.String getIssuerCertificateAuthorityId();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateCertificateConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfig">CertificatesManagementCertificateCertificateConfig</a>

---


### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList;

new CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get"></a>

```java
public CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>>

---


### CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference <a name="CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference;

new CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">CertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>

---


### CertificatesManagementCertificateCertificateConfigSubjectOutputReference <a name="CertificatesManagementCertificateCertificateConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference;

new CertificatesManagementCertificateCertificateConfigSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDistinguishedNameQualifier">resetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDomainComponent">resetDomainComponent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGenerationQualifier">resetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetLocalityName">resetLocalityName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetPseudonym">resetPseudonym</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStateOrProvinceName">resetStateOrProvinceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStreet">resetStreet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountry` <a name="resetCountry" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetDistinguishedNameQualifier` <a name="resetDistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```java
public void resetDistinguishedNameQualifier()
```

##### `resetDomainComponent` <a name="resetDomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetDomainComponent"></a>

```java
public void resetDomainComponent()
```

##### `resetGenerationQualifier` <a name="resetGenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGenerationQualifier"></a>

```java
public void resetGenerationQualifier()
```

##### `resetGivenName` <a name="resetGivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetGivenName"></a>

```java
public void resetGivenName()
```

##### `resetInitials` <a name="resetInitials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetInitials"></a>

```java
public void resetInitials()
```

##### `resetLocalityName` <a name="resetLocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetLocalityName"></a>

```java
public void resetLocalityName()
```

##### `resetOrganization` <a name="resetOrganization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetPseudonym` <a name="resetPseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetPseudonym"></a>

```java
public void resetPseudonym()
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSerialNumber"></a>

```java
public void resetSerialNumber()
```

##### `resetStateOrProvinceName` <a name="resetStateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStateOrProvinceName"></a>

```java
public void resetStateOrProvinceName()
```

##### `resetStreet` <a name="resetStreet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetStreet"></a>

```java
public void resetStreet()
```

##### `resetSurname` <a name="resetSurname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetSurname"></a>

```java
public void resetSurname()
```

##### `resetTitle` <a name="resetTitle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetUserId` <a name="resetUserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifierInput">distinguishedNameQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponentInput">domainComponentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifierInput">generationQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initialsInput">initialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityNameInput">localityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonymInput">pseudonymInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceNameInput">stateOrProvinceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.streetInput">streetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surnameInput">surnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials">initials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName">localityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street">street</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `distinguishedNameQualifierInput`<sup>Optional</sup> <a name="distinguishedNameQualifierInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```java
public java.lang.String getDistinguishedNameQualifierInput();
```

- *Type:* java.lang.String

---

##### `domainComponentInput`<sup>Optional</sup> <a name="domainComponentInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponentInput"></a>

```java
public java.lang.String getDomainComponentInput();
```

- *Type:* java.lang.String

---

##### `generationQualifierInput`<sup>Optional</sup> <a name="generationQualifierInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifierInput"></a>

```java
public java.lang.String getGenerationQualifierInput();
```

- *Type:* java.lang.String

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initialsInput"></a>

```java
public java.lang.String getInitialsInput();
```

- *Type:* java.lang.String

---

##### `localityNameInput`<sup>Optional</sup> <a name="localityNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityNameInput"></a>

```java
public java.lang.String getLocalityNameInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `pseudonymInput`<sup>Optional</sup> <a name="pseudonymInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonymInput"></a>

```java
public java.lang.String getPseudonymInput();
```

- *Type:* java.lang.String

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumberInput"></a>

```java
public java.lang.String getSerialNumberInput();
```

- *Type:* java.lang.String

---

##### `stateOrProvinceNameInput`<sup>Optional</sup> <a name="stateOrProvinceNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceNameInput"></a>

```java
public java.lang.String getStateOrProvinceNameInput();
```

- *Type:* java.lang.String

---

##### `streetInput`<sup>Optional</sup> <a name="streetInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.streetInput"></a>

```java
public java.lang.String getStreetInput();
```

- *Type:* java.lang.String

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surnameInput"></a>

```java
public java.lang.String getSurnameInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent"></a>

```java
public java.lang.String getDomainComponent();
```

- *Type:* java.lang.String

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName"></a>

```java
public java.lang.String getLocalityName();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```java
public java.lang.String getStateOrProvinceName();
```

- *Type:* java.lang.String

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street"></a>

```java
public java.lang.String getStreet();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateCertificateConfigSubject getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigSubject">CertificatesManagementCertificateCertificateConfigSubject</a>

---


### CertificatesManagementCertificateCertificateConfigValidityOutputReference <a name="CertificatesManagementCertificateCertificateConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference;

new CertificatesManagementCertificateCertificateConfigValidityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resetTimeOfValidityNotBefore">resetTimeOfValidityNotBefore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeOfValidityNotBefore` <a name="resetTimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.resetTimeOfValidityNotBefore"></a>

```java
public void resetTimeOfValidityNotBefore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfterInput">timeOfValidityNotAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBeforeInput">timeOfValidityNotBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotAfterInput`<sup>Optional</sup> <a name="timeOfValidityNotAfterInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfterInput"></a>

```java
public java.lang.String getTimeOfValidityNotAfterInput();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotBeforeInput`<sup>Optional</sup> <a name="timeOfValidityNotBeforeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBeforeInput"></a>

```java
public java.lang.String getTimeOfValidityNotBeforeInput();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```java
public java.lang.String getTimeOfValidityNotAfter();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```java
public java.lang.String getTimeOfValidityNotBefore();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateCertificateConfigValidity getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateConfigValidity">CertificatesManagementCertificateCertificateConfigValidity</a>

---


### CertificatesManagementCertificateCertificateRevocationListDetailsList <a name="CertificatesManagementCertificateCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateRevocationListDetailsList;

new CertificatesManagementCertificateCertificateRevocationListDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get"></a>

```java
public CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList;

new CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```java
public CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference;

new CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">objectStorageBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">objectStorageNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">objectStorageObjectNameFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectStorageBucketName`<sup>Required</sup> <a name="objectStorageBucketName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```java
public java.lang.String getObjectStorageBucketName();
```

- *Type:* java.lang.String

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```java
public java.lang.String getObjectStorageNamespace();
```

- *Type:* java.lang.String

---

##### `objectStorageObjectNameFormat`<sup>Required</sup> <a name="objectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```java
public java.lang.String getObjectStorageObjectNameFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a>

---


### CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference <a name="CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference;

new CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">customFormattedUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">objectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails">CertificatesManagementCertificateCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customFormattedUrls`<sup>Required</sup> <a name="customFormattedUrls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```java
public java.util.List<java.lang.String> getCustomFormattedUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectStorageConfig`<sup>Required</sup> <a name="objectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```java
public CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList getObjectStorageConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">CertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateCertificateRevocationListDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRevocationListDetails">CertificatesManagementCertificateCertificateRevocationListDetails</a>

---


### CertificatesManagementCertificateCertificateRulesList <a name="CertificatesManagementCertificateCertificateRulesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateRulesList;

new CertificatesManagementCertificateCertificateRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get"></a>

```java
public CertificatesManagementCertificateCertificateRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>>

---


### CertificatesManagementCertificateCertificateRulesOutputReference <a name="CertificatesManagementCertificateCertificateRulesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCertificateRulesOutputReference;

new CertificatesManagementCertificateCertificateRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriodInput">advanceRenewalPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalIntervalInput">renewalIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleTypeInput">ruleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod">advanceRenewalPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval">renewalInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advanceRenewalPeriodInput`<sup>Optional</sup> <a name="advanceRenewalPeriodInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriodInput"></a>

```java
public java.lang.String getAdvanceRenewalPeriodInput();
```

- *Type:* java.lang.String

---

##### `renewalIntervalInput`<sup>Optional</sup> <a name="renewalIntervalInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalIntervalInput"></a>

```java
public java.lang.String getRenewalIntervalInput();
```

- *Type:* java.lang.String

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleTypeInput"></a>

```java
public java.lang.String getRuleTypeInput();
```

- *Type:* java.lang.String

---

##### `advanceRenewalPeriod`<sup>Required</sup> <a name="advanceRenewalPeriod" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod"></a>

```java
public java.lang.String getAdvanceRenewalPeriod();
```

- *Type:* java.lang.String

---

##### `renewalInterval`<sup>Required</sup> <a name="renewalInterval" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval"></a>

```java
public java.lang.String getRenewalInterval();
```

- *Type:* java.lang.String

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCertificateRules">CertificatesManagementCertificateCertificateRules</a>

---


### CertificatesManagementCertificateCurrentVersionList <a name="CertificatesManagementCertificateCurrentVersionList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionList;

new CertificatesManagementCertificateCurrentVersionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get"></a>

```java
public CertificatesManagementCertificateCurrentVersionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificatesManagementCertificateCurrentVersionOutputReference <a name="CertificatesManagementCertificateCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionOutputReference;

new CertificatesManagementCertificateCurrentVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber">issuerCaVersionNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus">revocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList">CertificatesManagementCertificateCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.stages">stages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList">CertificatesManagementCertificateCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion">CertificatesManagementCertificateCurrentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `issuerCaVersionNumber`<sup>Required</sup> <a name="issuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```java
public java.lang.String getIssuerCaVersionNumber();
```

- *Type:* java.lang.String

---

##### `revocationStatus`<sup>Required</sup> <a name="revocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus"></a>

```java
public CertificatesManagementCertificateCurrentVersionRevocationStatusList getRevocationStatus();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList">CertificatesManagementCertificateCurrentVersionRevocationStatusList</a>

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.stages"></a>

```java
public java.util.List<java.lang.String> getStages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames"></a>

```java
public CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList getSubjectAlternativeNames();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion"></a>

```java
public java.lang.String getTimeOfDeletion();
```

- *Type:* java.lang.String

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.validity"></a>

```java
public CertificatesManagementCertificateCurrentVersionValidityList getValidity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList">CertificatesManagementCertificateCurrentVersionValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber"></a>

```java
public java.lang.String getVersionNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateCurrentVersion getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersion">CertificatesManagementCertificateCurrentVersion</a>

---


### CertificatesManagementCertificateCurrentVersionRevocationStatusList <a name="CertificatesManagementCertificateCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList;

new CertificatesManagementCertificateCurrentVersionRevocationStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get"></a>

```java
public CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference <a name="CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference;

new CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason">revocationReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">timeOfRevocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus">CertificatesManagementCertificateCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `revocationReason`<sup>Required</sup> <a name="revocationReason" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```java
public java.lang.String getRevocationReason();
```

- *Type:* java.lang.String

---

##### `timeOfRevocation`<sup>Required</sup> <a name="timeOfRevocation" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```java
public java.lang.String getTimeOfRevocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateCurrentVersionRevocationStatus getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionRevocationStatus">CertificatesManagementCertificateCurrentVersionRevocationStatus</a>

---


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList;

new CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get"></a>

```java
public CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference <a name="CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference;

new CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">CertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a>

---


### CertificatesManagementCertificateCurrentVersionValidityList <a name="CertificatesManagementCertificateCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionValidityList;

new CertificatesManagementCertificateCurrentVersionValidityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get"></a>

```java
public CertificatesManagementCertificateCurrentVersionValidityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificatesManagementCertificateCurrentVersionValidityOutputReference <a name="CertificatesManagementCertificateCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference;

new CertificatesManagementCertificateCurrentVersionValidityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity">CertificatesManagementCertificateCurrentVersionValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```java
public java.lang.String getTimeOfValidityNotAfter();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```java
public java.lang.String getTimeOfValidityNotBefore();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateCurrentVersionValidity getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateCurrentVersionValidity">CertificatesManagementCertificateCurrentVersionValidity</a>

---


### CertificatesManagementCertificateSubjectList <a name="CertificatesManagementCertificateSubjectList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateSubjectList;

new CertificatesManagementCertificateSubjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get"></a>

```java
public CertificatesManagementCertificateSubjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificatesManagementCertificateSubjectOutputReference <a name="CertificatesManagementCertificateSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateSubjectOutputReference;

new CertificatesManagementCertificateSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.initials">initials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.localityName">localityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.street">street</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject">CertificatesManagementCertificateSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.domainComponent"></a>

```java
public java.lang.String getDomainComponent();
```

- *Type:* java.lang.String

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.localityName"></a>

```java
public java.lang.String getLocalityName();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName"></a>

```java
public java.lang.String getStateOrProvinceName();
```

- *Type:* java.lang.String

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.street"></a>

```java
public java.lang.String getStreet();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubjectOutputReference.property.internalValue"></a>

```java
public CertificatesManagementCertificateSubject getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateSubject">CertificatesManagementCertificateSubject</a>

---


### CertificatesManagementCertificateTimeoutsOutputReference <a name="CertificatesManagementCertificateTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.certificates_management_certificate.CertificatesManagementCertificateTimeoutsOutputReference;

new CertificatesManagementCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificate.CertificatesManagementCertificateTimeouts">CertificatesManagementCertificateTimeouts</a>

---



