# `dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords` Submodule <a name="`dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records oci_jms_java_downloads_java_license_acceptance_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter>)
//  .id(java.lang.String)
//  .licenseType(java.lang.String)
//  .searchByUser(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.searchByUser">searchByUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#filter DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.licenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}.

---

##### `searchByUser`<sup>Optional</sup> <a name="searchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.searchByUser"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetSearchByUser">resetSearchByUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseType` <a name="resetLicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetLicenseType"></a>

```java
public void resetLicenseType()
```

##### `resetSearchByUser` <a name="resetSearchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetSearchByUser"></a>

```java
public void resetSearchByUser()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.javaLicenseAcceptanceRecordCollection">javaLicenseAcceptanceRecordCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUserInput">searchByUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUser">searchByUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filter"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList</a>

---

##### `javaLicenseAcceptanceRecordCollection`<sup>Required</sup> <a name="javaLicenseAcceptanceRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.javaLicenseAcceptanceRecordCollection"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList getJavaLicenseAcceptanceRecordCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `searchByUserInput`<sup>Optional</sup> <a name="searchByUserInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUserInput"></a>

```java
public java.lang.String getSearchByUserInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `searchByUser`<sup>Required</sup> <a name="searchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUser"></a>

```java
public java.lang.String getSearchByUser();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter>)
//  .id(java.lang.String)
//  .licenseType(java.lang.String)
//  .searchByUser(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.searchByUser">searchByUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#filter DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}.

---

##### `searchByUser`<sup>Optional</sup> <a name="searchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.searchByUser"></a>

```java
public java.lang.String getSearchByUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}.

---

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#name DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#values DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#regex DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#name DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#values DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#regex DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#regex}.

---

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection.builder()
    .build();
```


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems.builder()
    .build();
```


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy.builder()
    .build();
```


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy;

DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.get"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.get"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.get"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.internalValue"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.get"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseAcceptanceStatus">licenseAcceptanceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeAccepted">timeAccepted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeLastUpdated">timeLastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.createdBy"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList getCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList getLastUpdatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList</a>

---

##### `licenseAcceptanceStatus`<sup>Required</sup> <a name="licenseAcceptanceStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseAcceptanceStatus"></a>

```java
public java.lang.String getLicenseAcceptanceStatus();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeAccepted"></a>

```java
public java.lang.String getTimeAccepted();
```

- *Type:* java.lang.String

---

##### `timeLastUpdated`<sup>Required</sup> <a name="timeLastUpdated" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeLastUpdated"></a>

```java
public java.lang.String getTimeLastUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.get"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_java_downloads_java_license_acceptance_records.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference;

new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.items"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.internalValue"></a>

```java
public DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection</a>

---



