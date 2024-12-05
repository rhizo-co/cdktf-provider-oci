# `dataOciApmTracesTraceSnapshotData` Submodule <a name="`dataOciApmTracesTraceSnapshotData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTraceSnapshotData <a name="DataOciApmTracesTraceSnapshotData" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data oci_apm_traces_trace_snapshot_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_traces_trace_snapshot_data.DataOciApmTracesTraceSnapshotData;

DataOciApmTracesTraceSnapshotData.Builder.create(Construct scope, java.lang.String id)
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
    .apmDomainId(java.lang.String)
    .traceKey(java.lang.String)
//  .id(java.lang.String)
//  .isSummarized(java.lang.Boolean)
//  .isSummarized(IResolvable)
//  .snapshotTime(java.lang.String)
//  .threadId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.traceKey">traceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.isSummarized">isSummarized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.snapshotTime">snapshotTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.threadId">threadId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.apmDomainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}.

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.traceKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSummarized`<sup>Optional</sup> <a name="isSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.isSummarized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}.

---

##### `snapshotTime`<sup>Optional</sup> <a name="snapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.snapshotTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}.

---

##### `threadId`<sup>Optional</sup> <a name="threadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.threadId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized">resetIsSummarized</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime">resetSnapshotTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId">resetThreadId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId"></a>

```java
public void resetId()
```

##### `resetIsSummarized` <a name="resetIsSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized"></a>

```java
public void resetIsSummarized()
```

##### `resetSnapshotTime` <a name="resetSnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime"></a>

```java
public void resetSnapshotTime()
```

##### `resetThreadId` <a name="resetThreadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId"></a>

```java
public void resetThreadId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_traces_trace_snapshot_data.DataOciApmTracesTraceSnapshotData;

DataOciApmTracesTraceSnapshotData.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_traces_trace_snapshot_data.DataOciApmTracesTraceSnapshotData;

DataOciApmTracesTraceSnapshotData.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_traces_trace_snapshot_data.DataOciApmTracesTraceSnapshotData;

DataOciApmTracesTraceSnapshotData.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_traces_trace_snapshot_data.DataOciApmTracesTraceSnapshotData;

DataOciApmTracesTraceSnapshotData.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciApmTracesTraceSnapshotData.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciApmTracesTraceSnapshotData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciApmTracesTraceSnapshotData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTraceSnapshotData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails">traceSnapshotDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput">isSummarizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput">snapshotTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput">threadIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput">traceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized">isSummarized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime">snapshotTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId">threadId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey">traceKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `traceSnapshotDetails`<sup>Required</sup> <a name="traceSnapshotDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails"></a>

```java
public DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList getTraceSnapshotDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput"></a>

```java
public java.lang.String getApmDomainIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isSummarizedInput`<sup>Optional</sup> <a name="isSummarizedInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput"></a>

```java
public java.lang.Object getIsSummarizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotTimeInput`<sup>Optional</sup> <a name="snapshotTimeInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput"></a>

```java
public java.lang.String getSnapshotTimeInput();
```

- *Type:* java.lang.String

---

##### `threadIdInput`<sup>Optional</sup> <a name="threadIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput"></a>

```java
public java.lang.String getThreadIdInput();
```

- *Type:* java.lang.String

---

##### `traceKeyInput`<sup>Optional</sup> <a name="traceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput"></a>

```java
public java.lang.String getTraceKeyInput();
```

- *Type:* java.lang.String

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isSummarized`<sup>Required</sup> <a name="isSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized"></a>

```java
public java.lang.Object getIsSummarized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotTime`<sup>Required</sup> <a name="snapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime"></a>

```java
public java.lang.String getSnapshotTime();
```

- *Type:* java.lang.String

---

##### `threadId`<sup>Required</sup> <a name="threadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId"></a>

```java
public java.lang.String getThreadId();
```

- *Type:* java.lang.String

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey"></a>

```java
public java.lang.String getTraceKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceSnapshotDataConfig <a name="DataOciApmTracesTraceSnapshotDataConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_traces_trace_snapshot_data.DataOciApmTracesTraceSnapshotDataConfig;

DataOciApmTracesTraceSnapshotDataConfig.builder()
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
    .apmDomainId(java.lang.String)
    .traceKey(java.lang.String)
//  .id(java.lang.String)
//  .isSummarized(java.lang.Boolean)
//  .isSummarized(IResolvable)
//  .snapshotTime(java.lang.String)
//  .threadId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey">traceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized">isSummarized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime">snapshotTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId">threadId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}.

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey"></a>

```java
public java.lang.String getTraceKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSummarized`<sup>Optional</sup> <a name="isSummarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized"></a>

```java
public java.lang.Object getIsSummarized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}.

---

##### `snapshotTime`<sup>Optional</sup> <a name="snapshotTime" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime"></a>

```java
public java.lang.String getSnapshotTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}.

---

##### `threadId`<sup>Optional</sup> <a name="threadId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId"></a>

```java
public java.lang.String getThreadId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}.

---

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_traces_trace_snapshot_data.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails;

DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_traces_trace_snapshot_data.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList;

new DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get"></a>

```java
public DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_traces_trace_snapshot_data.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference;

new DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue"></a>

```java
public DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a>

---



