# `dataSafeLibraryMaskingFormat` Submodule <a name="`dataSafeLibraryMaskingFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeLibraryMaskingFormat <a name="DataSafeLibraryMaskingFormat" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format oci_data_safe_library_masking_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormat;

DataSafeLibraryMaskingFormat.Builder.create(Construct scope, java.lang.String id)
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
    .formatEntries(IResolvable)
    .formatEntries(java.util.List<DataSafeLibraryMaskingFormatFormatEntries>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sensitiveTypeIds(java.util.List<java.lang.String>)
//  .timeouts(DataSafeLibraryMaskingFormatTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.formatEntries">formatEntries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>></code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.sensitiveTypeIds">sensitiveTypeIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}.

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.formatEntries"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>>

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#format_entries DataSafeLibraryMaskingFormat#format_entries}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitiveTypeIds`<sup>Optional</sup> <a name="sensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.sensitiveTypeIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#timeouts DataSafeLibraryMaskingFormat#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries">putFormatEntries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds">resetSensitiveTypeIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFormatEntries` <a name="putFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries"></a>

```java
public void putFormatEntries(IResolvable OR java.util.List<DataSafeLibraryMaskingFormatFormatEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts"></a>

```java
public void putTimeouts(DataSafeLibraryMaskingFormatTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId"></a>

```java
public void resetId()
```

##### `resetSensitiveTypeIds` <a name="resetSensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds"></a>

```java
public void resetSensitiveTypeIds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormat;

DataSafeLibraryMaskingFormat.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormat;

DataSafeLibraryMaskingFormat.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormat;

DataSafeLibraryMaskingFormat.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormat;

DataSafeLibraryMaskingFormat.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeLibraryMaskingFormat.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeLibraryMaskingFormat to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeLibraryMaskingFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeLibraryMaskingFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries">formatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput">formatEntriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput">sensitiveTypeIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds">sensitiveTypeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries"></a>

```java
public DataSafeLibraryMaskingFormatFormatEntriesList getFormatEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts"></a>

```java
public DataSafeLibraryMaskingFormatTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `formatEntriesInput`<sup>Optional</sup> <a name="formatEntriesInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput"></a>

```java
public java.lang.Object getFormatEntriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sensitiveTypeIdsInput`<sup>Optional</sup> <a name="sensitiveTypeIdsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput"></a>

```java
public java.util.List<java.lang.String> getSensitiveTypeIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sensitiveTypeIds`<sup>Required</sup> <a name="sensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds"></a>

```java
public java.util.List<java.lang.String> getSensitiveTypeIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeLibraryMaskingFormatConfig <a name="DataSafeLibraryMaskingFormatConfig" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormatConfig;

DataSafeLibraryMaskingFormatConfig.builder()
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
    .formatEntries(IResolvable)
    .formatEntries(java.util.List<DataSafeLibraryMaskingFormatFormatEntries>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sensitiveTypeIds(java.util.List<java.lang.String>)
//  .timeouts(DataSafeLibraryMaskingFormatTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries">formatEntries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>></code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds">sensitiveTypeIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}.

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries"></a>

```java
public java.lang.Object getFormatEntries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>>

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#format_entries DataSafeLibraryMaskingFormat#format_entries}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitiveTypeIds`<sup>Optional</sup> <a name="sensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds"></a>

```java
public java.util.List<java.lang.String> getSensitiveTypeIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts"></a>

```java
public DataSafeLibraryMaskingFormatTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#timeouts DataSafeLibraryMaskingFormat#timeouts}

---

### DataSafeLibraryMaskingFormatFormatEntries <a name="DataSafeLibraryMaskingFormatFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormatFormatEntries;

DataSafeLibraryMaskingFormatFormatEntries.builder()
    .type(java.lang.String)
//  .columnName(java.lang.String)
//  .description(java.lang.String)
//  .endDate(java.lang.String)
//  .endLength(java.lang.Number)
//  .endValue(java.lang.Number)
//  .fixedNumber(java.lang.Number)
//  .fixedString(java.lang.String)
//  .groupingColumns(java.util.List<java.lang.String>)
//  .length(java.lang.Number)
//  .libraryMaskingFormatId(java.lang.String)
//  .pattern(java.lang.String)
//  .postProcessingFunction(java.lang.String)
//  .randomList(java.util.List<java.lang.String>)
//  .regularExpression(java.lang.String)
//  .replaceWith(java.lang.String)
//  .schemaName(java.lang.String)
//  .sqlExpression(java.lang.String)
//  .startDate(java.lang.String)
//  .startLength(java.lang.Number)
//  .startPosition(java.lang.Number)
//  .startValue(java.lang.Number)
//  .tableName(java.lang.String)
//  .userDefinedFunction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength">endLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue">endValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber">fixedNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString">fixedString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns">groupingColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length">length</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction">postProcessingFunction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList">randomList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression">regularExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith">replaceWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength">startLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition">startPosition</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue">startValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction">userDefinedFunction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}.

---

##### `endLength`<sup>Optional</sup> <a name="endLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength"></a>

```java
public java.lang.Number getEndLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}.

---

##### `endValue`<sup>Optional</sup> <a name="endValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue"></a>

```java
public java.lang.Number getEndValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}.

---

##### `fixedNumber`<sup>Optional</sup> <a name="fixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber"></a>

```java
public java.lang.Number getFixedNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}.

---

##### `fixedString`<sup>Optional</sup> <a name="fixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString"></a>

```java
public java.lang.String getFixedString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}.

---

##### `groupingColumns`<sup>Optional</sup> <a name="groupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns"></a>

```java
public java.util.List<java.lang.String> getGroupingColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}.

---

##### `length`<sup>Optional</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}.

---

##### `libraryMaskingFormatId`<sup>Optional</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId"></a>

```java
public java.lang.String getLibraryMaskingFormatId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}.

---

##### `postProcessingFunction`<sup>Optional</sup> <a name="postProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction"></a>

```java
public java.lang.String getPostProcessingFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}.

---

##### `randomList`<sup>Optional</sup> <a name="randomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList"></a>

```java
public java.util.List<java.lang.String> getRandomList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}.

---

##### `regularExpression`<sup>Optional</sup> <a name="regularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression"></a>

```java
public java.lang.String getRegularExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}.

---

##### `replaceWith`<sup>Optional</sup> <a name="replaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith"></a>

```java
public java.lang.String getReplaceWith();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}.

---

##### `sqlExpression`<sup>Optional</sup> <a name="sqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}.

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}.

---

##### `startLength`<sup>Optional</sup> <a name="startLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength"></a>

```java
public java.lang.Number getStartLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}.

---

##### `startPosition`<sup>Optional</sup> <a name="startPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition"></a>

```java
public java.lang.Number getStartPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}.

---

##### `startValue`<sup>Optional</sup> <a name="startValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue"></a>

```java
public java.lang.Number getStartValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}.

---

##### `userDefinedFunction`<sup>Optional</sup> <a name="userDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction"></a>

```java
public java.lang.String getUserDefinedFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}.

---

### DataSafeLibraryMaskingFormatTimeouts <a name="DataSafeLibraryMaskingFormatTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormatTimeouts;

DataSafeLibraryMaskingFormatTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeLibraryMaskingFormatFormatEntriesList <a name="DataSafeLibraryMaskingFormatFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormatFormatEntriesList;

new DataSafeLibraryMaskingFormatFormatEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get"></a>

```java
public DataSafeLibraryMaskingFormatFormatEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>>

---


### DataSafeLibraryMaskingFormatFormatEntriesOutputReference <a name="DataSafeLibraryMaskingFormatFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormatFormatEntriesOutputReference;

new DataSafeLibraryMaskingFormatFormatEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength">resetEndLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue">resetEndValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber">resetFixedNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString">resetFixedString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns">resetGroupingColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength">resetLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId">resetLibraryMaskingFormatId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction">resetPostProcessingFunction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList">resetRandomList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression">resetRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith">resetReplaceWith</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression">resetSqlExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength">resetStartLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition">resetStartPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue">resetStartValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction">resetUserDefinedFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndDate` <a name="resetEndDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate"></a>

```java
public void resetEndDate()
```

##### `resetEndLength` <a name="resetEndLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength"></a>

```java
public void resetEndLength()
```

##### `resetEndValue` <a name="resetEndValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue"></a>

```java
public void resetEndValue()
```

##### `resetFixedNumber` <a name="resetFixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber"></a>

```java
public void resetFixedNumber()
```

##### `resetFixedString` <a name="resetFixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString"></a>

```java
public void resetFixedString()
```

##### `resetGroupingColumns` <a name="resetGroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns"></a>

```java
public void resetGroupingColumns()
```

##### `resetLength` <a name="resetLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength"></a>

```java
public void resetLength()
```

##### `resetLibraryMaskingFormatId` <a name="resetLibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId"></a>

```java
public void resetLibraryMaskingFormatId()
```

##### `resetPattern` <a name="resetPattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern"></a>

```java
public void resetPattern()
```

##### `resetPostProcessingFunction` <a name="resetPostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction"></a>

```java
public void resetPostProcessingFunction()
```

##### `resetRandomList` <a name="resetRandomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList"></a>

```java
public void resetRandomList()
```

##### `resetRegularExpression` <a name="resetRegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression"></a>

```java
public void resetRegularExpression()
```

##### `resetReplaceWith` <a name="resetReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith"></a>

```java
public void resetReplaceWith()
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetSqlExpression` <a name="resetSqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression"></a>

```java
public void resetSqlExpression()
```

##### `resetStartDate` <a name="resetStartDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate"></a>

```java
public void resetStartDate()
```

##### `resetStartLength` <a name="resetStartLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength"></a>

```java
public void resetStartLength()
```

##### `resetStartPosition` <a name="resetStartPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition"></a>

```java
public void resetStartPosition()
```

##### `resetStartValue` <a name="resetStartValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue"></a>

```java
public void resetStartValue()
```

##### `resetTableName` <a name="resetTableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetUserDefinedFunction` <a name="resetUserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction"></a>

```java
public void resetUserDefinedFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput">endLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput">endValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput">fixedNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput">fixedStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput">groupingColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput">lengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput">libraryMaskingFormatIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput">postProcessingFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput">randomListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput">regularExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput">replaceWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput">startLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput">startPositionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput">startValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput">userDefinedFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength">endLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue">endValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber">fixedNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString">fixedString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns">groupingColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction">postProcessingFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList">randomList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression">regularExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith">replaceWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength">startLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition">startPosition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue">startValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction">userDefinedFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `endLengthInput`<sup>Optional</sup> <a name="endLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput"></a>

```java
public java.lang.Number getEndLengthInput();
```

- *Type:* java.lang.Number

---

##### `endValueInput`<sup>Optional</sup> <a name="endValueInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput"></a>

```java
public java.lang.Number getEndValueInput();
```

- *Type:* java.lang.Number

---

##### `fixedNumberInput`<sup>Optional</sup> <a name="fixedNumberInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput"></a>

```java
public java.lang.Number getFixedNumberInput();
```

- *Type:* java.lang.Number

---

##### `fixedStringInput`<sup>Optional</sup> <a name="fixedStringInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput"></a>

```java
public java.lang.String getFixedStringInput();
```

- *Type:* java.lang.String

---

##### `groupingColumnsInput`<sup>Optional</sup> <a name="groupingColumnsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput"></a>

```java
public java.util.List<java.lang.String> getGroupingColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput"></a>

```java
public java.lang.Number getLengthInput();
```

- *Type:* java.lang.Number

---

##### `libraryMaskingFormatIdInput`<sup>Optional</sup> <a name="libraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput"></a>

```java
public java.lang.String getLibraryMaskingFormatIdInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `postProcessingFunctionInput`<sup>Optional</sup> <a name="postProcessingFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput"></a>

```java
public java.lang.String getPostProcessingFunctionInput();
```

- *Type:* java.lang.String

---

##### `randomListInput`<sup>Optional</sup> <a name="randomListInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput"></a>

```java
public java.util.List<java.lang.String> getRandomListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regularExpressionInput`<sup>Optional</sup> <a name="regularExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput"></a>

```java
public java.lang.String getRegularExpressionInput();
```

- *Type:* java.lang.String

---

##### `replaceWithInput`<sup>Optional</sup> <a name="replaceWithInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput"></a>

```java
public java.lang.String getReplaceWithInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput"></a>

```java
public java.lang.String getSqlExpressionInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `startLengthInput`<sup>Optional</sup> <a name="startLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput"></a>

```java
public java.lang.Number getStartLengthInput();
```

- *Type:* java.lang.Number

---

##### `startPositionInput`<sup>Optional</sup> <a name="startPositionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput"></a>

```java
public java.lang.Number getStartPositionInput();
```

- *Type:* java.lang.Number

---

##### `startValueInput`<sup>Optional</sup> <a name="startValueInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput"></a>

```java
public java.lang.Number getStartValueInput();
```

- *Type:* java.lang.Number

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userDefinedFunctionInput`<sup>Optional</sup> <a name="userDefinedFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput"></a>

```java
public java.lang.String getUserDefinedFunctionInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `endLength`<sup>Required</sup> <a name="endLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength"></a>

```java
public java.lang.Number getEndLength();
```

- *Type:* java.lang.Number

---

##### `endValue`<sup>Required</sup> <a name="endValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue"></a>

```java
public java.lang.Number getEndValue();
```

- *Type:* java.lang.Number

---

##### `fixedNumber`<sup>Required</sup> <a name="fixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber"></a>

```java
public java.lang.Number getFixedNumber();
```

- *Type:* java.lang.Number

---

##### `fixedString`<sup>Required</sup> <a name="fixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString"></a>

```java
public java.lang.String getFixedString();
```

- *Type:* java.lang.String

---

##### `groupingColumns`<sup>Required</sup> <a name="groupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns"></a>

```java
public java.util.List<java.lang.String> getGroupingColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `libraryMaskingFormatId`<sup>Required</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```java
public java.lang.String getLibraryMaskingFormatId();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `postProcessingFunction`<sup>Required</sup> <a name="postProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction"></a>

```java
public java.lang.String getPostProcessingFunction();
```

- *Type:* java.lang.String

---

##### `randomList`<sup>Required</sup> <a name="randomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList"></a>

```java
public java.util.List<java.lang.String> getRandomList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regularExpression`<sup>Required</sup> <a name="regularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression"></a>

```java
public java.lang.String getRegularExpression();
```

- *Type:* java.lang.String

---

##### `replaceWith`<sup>Required</sup> <a name="replaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith"></a>

```java
public java.lang.String getReplaceWith();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `startLength`<sup>Required</sup> <a name="startLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength"></a>

```java
public java.lang.Number getStartLength();
```

- *Type:* java.lang.Number

---

##### `startPosition`<sup>Required</sup> <a name="startPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition"></a>

```java
public java.lang.Number getStartPosition();
```

- *Type:* java.lang.Number

---

##### `startValue`<sup>Required</sup> <a name="startValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue"></a>

```java
public java.lang.Number getStartValue();
```

- *Type:* java.lang.Number

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userDefinedFunction`<sup>Required</sup> <a name="userDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction"></a>

```java
public java.lang.String getUserDefinedFunction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>

---


### DataSafeLibraryMaskingFormatTimeoutsOutputReference <a name="DataSafeLibraryMaskingFormatTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_library_masking_format.DataSafeLibraryMaskingFormatTimeoutsOutputReference;

new DataSafeLibraryMaskingFormatTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

---



