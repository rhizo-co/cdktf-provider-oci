# `dataOciDataSafeAuditProfileAvailableAuditVolumes` Submodule <a name="`dataOciDataSafeAuditProfileAvailableAuditVolumes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumes <a name="DataOciDataSafeAuditProfileAvailableAuditVolumes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes oci_data_safe_audit_profile_available_audit_volumes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumes;

DataOciDataSafeAuditProfileAvailableAuditVolumes.Builder.create(Construct scope, java.lang.String id)
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
    .auditProfileId(java.lang.String)
    .workRequestId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeAuditProfileAvailableAuditVolumesFilter>)
//  .id(java.lang.String)
//  .monthInConsiderationGreaterThan(java.lang.String)
//  .monthInConsiderationLessThan(java.lang.String)
//  .trailLocation(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.auditProfileId">auditProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolumes#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.workRequestId">workRequestId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolumes#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#id DataOciDataSafeAuditProfileAvailableAuditVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.trailLocation">trailLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#trail_location DataOciDataSafeAuditProfileAvailableAuditVolumes#trail_location}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.auditProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolumes#audit_profile_id}.

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.workRequestId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolumes#work_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#filter DataOciDataSafeAuditProfileAvailableAuditVolumes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#id DataOciDataSafeAuditProfileAvailableAuditVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthInConsiderationGreaterThan`<sup>Optional</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.monthInConsiderationGreaterThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_greater_than}.

---

##### `monthInConsiderationLessThan`<sup>Optional</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.monthInConsiderationLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_less_than}.

---

##### `trailLocation`<sup>Optional</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.trailLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#trail_location DataOciDataSafeAuditProfileAvailableAuditVolumes#trail_location}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationGreaterThan">resetMonthInConsiderationGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationLessThan">resetMonthInConsiderationLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetTrailLocation">resetTrailLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeAuditProfileAvailableAuditVolumesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetId"></a>

```java
public void resetId()
```

##### `resetMonthInConsiderationGreaterThan` <a name="resetMonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationGreaterThan"></a>

```java
public void resetMonthInConsiderationGreaterThan()
```

##### `resetMonthInConsiderationLessThan` <a name="resetMonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationLessThan"></a>

```java
public void resetMonthInConsiderationLessThan()
```

##### `resetTrailLocation` <a name="resetTrailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetTrailLocation"></a>

```java
public void resetTrailLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolumes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumes;

DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumes;

DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumes;

DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumes;

DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolumes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeAuditProfileAvailableAuditVolumes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeAuditProfileAvailableAuditVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileAvailableAuditVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.availableAuditVolumeCollection">availableAuditVolumeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList">DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileIdInput">auditProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThanInput">monthInConsiderationGreaterThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThanInput">monthInConsiderationLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocationInput">trailLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestIdInput">workRequestIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileId">auditProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocation">trailLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestId">workRequestId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availableAuditVolumeCollection`<sup>Required</sup> <a name="availableAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.availableAuditVolumeCollection"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList getAvailableAuditVolumeCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filter"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList">DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList</a>

---

##### `auditProfileIdInput`<sup>Optional</sup> <a name="auditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileIdInput"></a>

```java
public java.lang.String getAuditProfileIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monthInConsiderationGreaterThanInput`<sup>Optional</sup> <a name="monthInConsiderationGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThanInput"></a>

```java
public java.lang.String getMonthInConsiderationGreaterThanInput();
```

- *Type:* java.lang.String

---

##### `monthInConsiderationLessThanInput`<sup>Optional</sup> <a name="monthInConsiderationLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThanInput"></a>

```java
public java.lang.String getMonthInConsiderationLessThanInput();
```

- *Type:* java.lang.String

---

##### `trailLocationInput`<sup>Optional</sup> <a name="trailLocationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocationInput"></a>

```java
public java.lang.String getTrailLocationInput();
```

- *Type:* java.lang.String

---

##### `workRequestIdInput`<sup>Optional</sup> <a name="workRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestIdInput"></a>

```java
public java.lang.String getWorkRequestIdInput();
```

- *Type:* java.lang.String

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileId"></a>

```java
public java.lang.String getAuditProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monthInConsiderationGreaterThan`<sup>Required</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThan"></a>

```java
public java.lang.String getMonthInConsiderationGreaterThan();
```

- *Type:* java.lang.String

---

##### `monthInConsiderationLessThan`<sup>Required</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThan"></a>

```java
public java.lang.String getMonthInConsiderationLessThan();
```

- *Type:* java.lang.String

---

##### `trailLocation`<sup>Required</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocation"></a>

```java
public java.lang.String getTrailLocation();
```

- *Type:* java.lang.String

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestId"></a>

```java
public java.lang.String getWorkRequestId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection;

DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection.builder()
    .build();
```


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems;

DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems.builder()
    .build();
```


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems;

DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems.builder()
    .build();
```


### DataOciDataSafeAuditProfileAvailableAuditVolumesConfig <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig;

DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.builder()
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
    .auditProfileId(java.lang.String)
    .workRequestId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeAuditProfileAvailableAuditVolumesFilter>)
//  .id(java.lang.String)
//  .monthInConsiderationGreaterThan(java.lang.String)
//  .monthInConsiderationLessThan(java.lang.String)
//  .trailLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.auditProfileId">auditProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolumes#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.workRequestId">workRequestId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolumes#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#id DataOciDataSafeAuditProfileAvailableAuditVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.trailLocation">trailLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#trail_location DataOciDataSafeAuditProfileAvailableAuditVolumes#trail_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.auditProfileId"></a>

```java
public java.lang.String getAuditProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolumes#audit_profile_id}.

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.workRequestId"></a>

```java
public java.lang.String getWorkRequestId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolumes#work_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#filter DataOciDataSafeAuditProfileAvailableAuditVolumes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#id DataOciDataSafeAuditProfileAvailableAuditVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthInConsiderationGreaterThan`<sup>Optional</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationGreaterThan"></a>

```java
public java.lang.String getMonthInConsiderationGreaterThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_greater_than}.

---

##### `monthInConsiderationLessThan`<sup>Optional</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationLessThan"></a>

```java
public java.lang.String getMonthInConsiderationLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_less_than}.

---

##### `trailLocation`<sup>Optional</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.trailLocation"></a>

```java
public java.lang.String getTrailLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#trail_location DataOciDataSafeAuditProfileAvailableAuditVolumes#trail_location}.

---

### DataOciDataSafeAuditProfileAvailableAuditVolumesFilter <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter;

DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#name DataOciDataSafeAuditProfileAvailableAuditVolumes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#values DataOciDataSafeAuditProfileAvailableAuditVolumes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#regex DataOciDataSafeAuditProfileAvailableAuditVolumes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#name DataOciDataSafeAuditProfileAvailableAuditVolumes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#values DataOciDataSafeAuditProfileAvailableAuditVolumes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#regex DataOciDataSafeAuditProfileAvailableAuditVolumes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList;

new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.get"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference;

new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId">auditProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditTrailId">auditTrailId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.databaseUniqueName">databaseUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration">monthInConsideration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.trailLocation">trailLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.volume">volume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId"></a>

```java
public java.lang.String getAuditProfileId();
```

- *Type:* java.lang.String

---

##### `auditTrailId`<sup>Required</sup> <a name="auditTrailId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditTrailId"></a>

```java
public java.lang.String getAuditTrailId();
```

- *Type:* java.lang.String

---

##### `databaseUniqueName`<sup>Required</sup> <a name="databaseUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.databaseUniqueName"></a>

```java
public java.lang.String getDatabaseUniqueName();
```

- *Type:* java.lang.String

---

##### `monthInConsideration`<sup>Required</sup> <a name="monthInConsideration" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration"></a>

```java
public java.lang.String getMonthInConsideration();
```

- *Type:* java.lang.String

---

##### `trailLocation`<sup>Required</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.trailLocation"></a>

```java
public java.lang.String getTrailLocation();
```

- *Type:* java.lang.String

---

##### `volume`<sup>Required</sup> <a name="volume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems</a>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList;

new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.get"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference;

new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.items"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems</a>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList;

new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.get"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference;

new DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection</a>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList;

new DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.get"></a>

```java
public DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_audit_profile_available_audit_volumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference;

new DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>

---



