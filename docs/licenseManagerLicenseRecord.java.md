# `licenseManagerLicenseRecord` Submodule <a name="`licenseManagerLicenseRecord` Submodule" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicenseManagerLicenseRecord <a name="LicenseManagerLicenseRecord" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record oci_license_manager_license_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.license_manager_license_record.LicenseManagerLicenseRecord;

LicenseManagerLicenseRecord.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .isPerpetual(java.lang.Boolean)
    .isPerpetual(IResolvable)
    .isUnlimited(java.lang.Boolean)
    .isUnlimited(IResolvable)
    .productLicenseId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .expirationDate(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .licenseCount(java.lang.Number)
//  .productId(java.lang.String)
//  .supportEndDate(java.lang.String)
//  .timeouts(LicenseManagerLicenseRecordTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.isPerpetual">isPerpetual</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.isUnlimited">isUnlimited</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.productLicenseId">productLicenseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.licenseCount">licenseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.supportEndDate">supportEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}.

---

##### `isPerpetual`<sup>Required</sup> <a name="isPerpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.isPerpetual"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}.

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.isUnlimited"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}.

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.productLicenseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.expirationDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseCount`<sup>Optional</sup> <a name="licenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.licenseCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}.

---

##### `supportEndDate`<sup>Optional</sup> <a name="supportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.supportEndDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#timeouts LicenseManagerLicenseRecord#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetLicenseCount">resetLicenseCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetSupportEndDate">resetSupportEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts"></a>

```java
public void putTimeouts(LicenseManagerLicenseRecordTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetExpirationDate"></a>

```java
public void resetExpirationDate()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseCount` <a name="resetLicenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetLicenseCount"></a>

```java
public void resetLicenseCount()
```

##### `resetProductId` <a name="resetProductId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetProductId"></a>

```java
public void resetProductId()
```

##### `resetSupportEndDate` <a name="resetSupportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetSupportEndDate"></a>

```java
public void resetSupportEndDate()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.license_manager_license_record.LicenseManagerLicenseRecord;

LicenseManagerLicenseRecord.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.license_manager_license_record.LicenseManagerLicenseRecord;

LicenseManagerLicenseRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.license_manager_license_record.LicenseManagerLicenseRecord;

LicenseManagerLicenseRecord.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.license_manager_license_record.LicenseManagerLicenseRecord;

LicenseManagerLicenseRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LicenseManagerLicenseRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LicenseManagerLicenseRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LicenseManagerLicenseRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LicenseManagerLicenseRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseUnit">licenseUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicense">productLicense</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference">LicenseManagerLicenseRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDateInput">expirationDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetualInput">isPerpetualInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimitedInput">isUnlimitedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCountInput">licenseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseIdInput">productLicenseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDateInput">supportEndDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetual">isPerpetual</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimited">isUnlimited</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCount">licenseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseId">productLicenseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDate">supportEndDate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `licenseUnit`<sup>Required</sup> <a name="licenseUnit" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseUnit"></a>

```java
public java.lang.String getLicenseUnit();
```

- *Type:* java.lang.String

---

##### `productLicense`<sup>Required</sup> <a name="productLicense" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicense"></a>

```java
public java.lang.String getProductLicense();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeouts"></a>

```java
public LicenseManagerLicenseRecordTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference">LicenseManagerLicenseRecordTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDateInput"></a>

```java
public java.lang.String getExpirationDateInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isPerpetualInput`<sup>Optional</sup> <a name="isPerpetualInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetualInput"></a>

```java
public java.lang.Object getIsPerpetualInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUnlimitedInput`<sup>Optional</sup> <a name="isUnlimitedInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimitedInput"></a>

```java
public java.lang.Object getIsUnlimitedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseCountInput`<sup>Optional</sup> <a name="licenseCountInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCountInput"></a>

```java
public java.lang.Number getLicenseCountInput();
```

- *Type:* java.lang.Number

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `productLicenseIdInput`<sup>Optional</sup> <a name="productLicenseIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseIdInput"></a>

```java
public java.lang.String getProductLicenseIdInput();
```

- *Type:* java.lang.String

---

##### `supportEndDateInput`<sup>Optional</sup> <a name="supportEndDateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDateInput"></a>

```java
public java.lang.String getSupportEndDateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPerpetual`<sup>Required</sup> <a name="isPerpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetual"></a>

```java
public java.lang.Object getIsPerpetual();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimited"></a>

```java
public java.lang.Object getIsUnlimited();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCount"></a>

```java
public java.lang.Number getLicenseCount();
```

- *Type:* java.lang.Number

---

##### `productId`<sup>Required</sup> <a name="productId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseId"></a>

```java
public java.lang.String getProductLicenseId();
```

- *Type:* java.lang.String

---

##### `supportEndDate`<sup>Required</sup> <a name="supportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDate"></a>

```java
public java.lang.String getSupportEndDate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LicenseManagerLicenseRecordConfig <a name="LicenseManagerLicenseRecordConfig" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.license_manager_license_record.LicenseManagerLicenseRecordConfig;

LicenseManagerLicenseRecordConfig.builder()
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
    .displayName(java.lang.String)
    .isPerpetual(java.lang.Boolean)
    .isPerpetual(IResolvable)
    .isUnlimited(java.lang.Boolean)
    .isUnlimited(IResolvable)
    .productLicenseId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .expirationDate(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .licenseCount(java.lang.Number)
//  .productId(java.lang.String)
//  .supportEndDate(java.lang.String)
//  .timeouts(LicenseManagerLicenseRecordTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isPerpetual">isPerpetual</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isUnlimited">isUnlimited</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productLicenseId">productLicenseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.licenseCount">licenseCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.supportEndDate">supportEndDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}.

---

##### `isPerpetual`<sup>Required</sup> <a name="isPerpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isPerpetual"></a>

```java
public java.lang.Object getIsPerpetual();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}.

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isUnlimited"></a>

```java
public java.lang.Object getIsUnlimited();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}.

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productLicenseId"></a>

```java
public java.lang.String getProductLicenseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseCount`<sup>Optional</sup> <a name="licenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.licenseCount"></a>

```java
public java.lang.Number getLicenseCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}.

---

##### `supportEndDate`<sup>Optional</sup> <a name="supportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.supportEndDate"></a>

```java
public java.lang.String getSupportEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.timeouts"></a>

```java
public LicenseManagerLicenseRecordTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#timeouts LicenseManagerLicenseRecord#timeouts}

---

### LicenseManagerLicenseRecordTimeouts <a name="LicenseManagerLicenseRecordTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.license_manager_license_record.LicenseManagerLicenseRecordTimeouts;

LicenseManagerLicenseRecordTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicenseManagerLicenseRecordTimeoutsOutputReference <a name="LicenseManagerLicenseRecordTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.license_manager_license_record.LicenseManagerLicenseRecordTimeoutsOutputReference;

new LicenseManagerLicenseRecordTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

---



